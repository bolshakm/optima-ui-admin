import React, { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface IProps {
  onClose: () => void;
  children: ReactNode;
}

export const ModalTemplate: FC<IProps> = ({ children, onClose }) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  
  return (
    <div className={styles.content} onClick={onClose}>
      <div className={styles.inner} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
};
