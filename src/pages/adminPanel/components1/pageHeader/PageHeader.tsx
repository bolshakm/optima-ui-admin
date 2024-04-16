import React from 'react';
import styles from './styles.module.css'
import { Button } from 'components/button';

interface IProps = 

export const PageHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div>  QR Coddy</div>

    <div>12 days left before payment</div>
    <Button text=  />
    <div>My plan</div>
      </div>
    
  </div>
  )
}