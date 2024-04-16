import { AuthHeader } from 'components';
import React, { useEffect } from 'react';
import { localizationService } from 'services';
import { useLanguageStore } from 'store';
import { useRegistrationStore } from './store';
import { Link } from 'react-router-dom';
import { routerKeys } from 'common/constants';
import { PageContent } from './components';

export const RegistrationPage = () => {
  const { currentLang: lang } = useLanguageStore();
  const { setTexts, texts } = useRegistrationStore();

  useEffect(() => {
    localizationService
      .getLanguagePage({ lang, page: 'registration' })
      .then(setTexts);
  }, [lang, setTexts]);

  return (
    <div className='auth'>
      <AuthHeader>
        <span className='auth-header-text'>
          {texts['registration.already.have.an.account']}
          <Link
            to={`/${routerKeys.auth}/${routerKeys.login}`}
            className='auth-header-link'
          >
            {texts['registration.log.in']}
          </Link>
        </span>
      </AuthHeader>
      <PageContent />
    </div>
  );
};
