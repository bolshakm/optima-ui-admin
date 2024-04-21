import { AuthHeader } from 'components';
import React, { useEffect } from 'react';
import { localizationService } from 'services';
import { useLanguageStore } from 'store';
import { useLoginStore } from './store';
import { Link } from 'react-router-dom';
import { routerKeys } from 'common/constants';
import { PageContent } from './components';

export const LoginPage = () => {
  const { currentLang: lang } = useLanguageStore();
  const { setTexts, texts } = useLoginStore();

  useEffect(() => {
    localizationService
      .getLanguagePage({ lang, page: 'login' })
      .then(setTexts)
  }, [lang, setTexts]);

  return (
    <div className='auth'>
      <AuthHeader>
        <span className='auth-header-text'>
          {texts['login.do.not.have.an.account']}
          <Link
            to={`/${routerKeys.auth}/${routerKeys.registration}`}
            className='auth-header-link'
          >
            {texts['login.crate.button']}
          </Link>
        </span>
      </AuthHeader>
      <PageContent />
    </div>
  );
};
