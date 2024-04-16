import React, { useEffect } from 'react';
import { useLanguageStore } from 'store';
import { useAdminStore } from './store';
import { localizationService } from 'services';
import { PageHeader } from './components';

export const AdminPanel = () => {
  const { currentLang: lang } = useLanguageStore();
  const { setTexts } = useAdminStore();

  useEffect(() => {
    localizationService.getLanguagePage({ lang, page: 'admin' }).then(setTexts);
  }, [lang, setTexts]);

  return (
    <div>
      <PageHeader />
    </div>
  );
};
