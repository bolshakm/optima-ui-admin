import React, { useEffect, useState } from 'react';
import { useLanguageStore } from 'store';
import { useAdminStore } from './store';
import { localizationService } from 'services';
import { PageHeader, Sidebar } from './components';
import styles from './styles.module.css';
import { TabsContent } from './components/tabs';

export const AdminPanel = () => {
  const { currentLang: lang } = useLanguageStore();
  const { setTexts } = useAdminStore();
  const [selectedTab, setSelectedTab] = useState('');

  useEffect(() => {
    localizationService.getLanguagePage({ lang, page: 'admin' }).then(setTexts);
  }, [lang, setTexts]);

  return (
    <div className={styles.page}>
      <PageHeader />
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
        <div className={styles.inner}>
          <TabsContent selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};
