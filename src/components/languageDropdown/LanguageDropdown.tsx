import React, { FC, useEffect, useRef, useState } from 'react';
import { ReactComponent as ExpandMoreIcon } from 'assets/expand_more.svg';
import styles from './styles.module.css';
import { LanguageSet, Language, LanguageLow } from 'common/types';
import { localizationService } from 'services';
import { useLanguageStore } from 'store';
import { languagesMap } from 'common/constants';
import classNames from 'classnames';

interface IProps {
  isSmall?: boolean;
  className?: string;
}

export const LanguageDropdown: FC<IProps> = ({
  isSmall = false,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [languages, setLanguages] = useState<LanguageSet>({} as LanguageSet);
  const { currentLang, setCurrentLang } = useLanguageStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!Object.keys(languages).length) {
      localizationService.getLanguages().then(setLanguages);
    }
  }, [languages]);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSetLanguage = (key: LanguageLow) => {
    setCurrentLang(key);
    toggleIsExpanded();
  };

  const generateText = (key: LanguageLow) => {
    if (isSmall) return key.toLocaleUpperCase();

    return languagesMap[key];
  };

  return (
    <div
      className={classNames(styles.button, className)}
      onClick={toggleIsExpanded}
      ref={dropdownRef}
    >
      <div className={styles.text}>
        {generateText(currentLang)}
        <ExpandMoreIcon
          className={`${styles.icon} ${isExpanded ? styles.reverted : ''}`}
        />
      </div>
      <ul className={`${styles.list} ${isExpanded ? styles.visible : ''}`}>
        {Object.keys(languages)?.map((key) => {
          const value = languages[key as Language];

          return (
            <li className={styles.item} key={key}>
              <button
                className={`${styles.option} ${
                  currentLang === value ? styles.active : ''
                }`}
                onClick={() => handleSetLanguage(value)}
              >
                {generateText(value)}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
