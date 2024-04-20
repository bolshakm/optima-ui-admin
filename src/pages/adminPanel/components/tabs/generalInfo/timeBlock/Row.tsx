import React, { FC } from 'react';
import styles from './styles.module.css';
import { CheckBox } from 'components';
import { WeekDays } from 'common/types';
import { createTimeOptions } from 'common/utils';
import { useAdminStore } from 'pages/adminPanel/store';

interface IProps {
  text: string;
  key: keyof WeekDays;
  workingHours: WeekDays;
  setWorkingHours: (value: React.SetStateAction<WeekDays>) => void;
}

export const Row: FC<IProps> = ({
  text,
  key,
  workingHours,
  setWorkingHours,
}) => {
  const options = createTimeOptions();
  const { texts } = useAdminStore();

  const handleChangeWorkDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof WeekDays;

    setWorkingHours((curr) => ({
      ...curr,
      [name]: { ...curr[name], selected: !curr[name].selected },
    }));
  };

  return (
    <div className={styles.row}>
      <div className={styles.day}>
        <CheckBox
          text={text}
          handleChange={handleChangeWorkDay}
          name={key}
          isChecked={workingHours[key].selected}
        />
      </div>
      <div className={styles.periods}>
        <select name='Mon' className={styles.period}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        -
        <select name='Mon' className={styles.period}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.button}>
        {texts['admin.add.more.time.periods']}
      </button>
    </div>
  );
};
