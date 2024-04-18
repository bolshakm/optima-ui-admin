import React, { FC, ReactNode } from 'react';
import styles from './styles.module.css';
import { Button } from 'components';
import { useAdminStore } from 'pages/adminPanel/store';
import classNames from 'classnames';

interface IProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const InfoBlock: FC<IProps> = ({
  title,
  children,
  className = '',
}) => {
  const { texts } = useAdminStore();

  return (
    <div className={classNames(styles.block, className)}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Button
          green={true}
          text={texts['admin.save.changes.button']}
          type='submit'
        />
      </div>
    </div>
  );
};
