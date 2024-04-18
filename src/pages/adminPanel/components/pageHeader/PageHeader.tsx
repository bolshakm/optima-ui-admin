import React from 'react';
import styles from './styles.module.css';
import { Button } from 'components/button';
import { useAdminStore } from 'pages/adminPanel/store';
import classNames from 'classnames';
import { ReactComponent as Clock } from 'assets/clock.svg';
import { ReactComponent as More } from 'assets/expand_more.svg';
import { ReactComponent as Bell } from 'assets/bell.svg';
import { ReactComponent as Person } from 'assets/person.svg';
import { ReactComponent as Phone } from 'assets/phone.svg';

import { LanguageDropdown } from 'components';

export const PageHeader = () => {
  const { texts, restaurantName } = useAdminStore();

  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className='container'>
          <div className={styles.headerContent}>
            <h6 className={classNames(styles.topText, styles.bold)}>
              QR Coddy
            </h6>
            <h6 className={classNames(styles.topText)}>
              <Clock />
              12 days left before payment
            </h6>
            <Button text={texts['admin.my.plan.button']} green={true} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className='container'>
          <div className={styles.headerContent}>
            <h6 className={styles.restaurant}>{restaurantName}</h6>
            <div className={styles.bottomContent}>
              <Button
                text={texts['admin.view.as.client.button']}
                frontIcon={<Phone />}
                className={styles.headerButton}
              />
              <Button
                text=''
                frontIcon={<Bell />}
                className={styles.headerButton}
              />
              <LanguageDropdown
                isSmall={true}
                className={`${styles.headerButton} ${styles.pr0}`}
              />
              <Button
                className={`${styles.headerButton} ${styles.modifySvg}`}
                text={texts['admin.view.as.client.button']}
                frontIcon={<Person />}
                endIcon={<More />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
