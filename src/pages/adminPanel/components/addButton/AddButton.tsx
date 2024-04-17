import React, { FC, memo } from 'react';
import styles from './styles.module.css';
import { ReactComponent as Plus } from 'assets/plus.svg'

interface IProps {
  text: string;
  craeteCallback: () => void;
}

export const AddButton: FC<IProps> = memo(({ text, craeteCallback }) => {
  return (
    <div className={styles.container}>
      <h6 className={styles.text}>{text}</h6>
      <button className={styles.button} onClick={craeteCallback}>
        <Plus />
      </button>
    </div>
  );
});
