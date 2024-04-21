import React, { FC } from 'react';
import styles from './styles.module.css';
import { Button, CheckBox } from 'components';
import { WeekDays } from 'common/types';
import { createTimeOptions } from 'common/utils';
import { useAdminStore } from 'pages/adminPanel/store';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  text: string;
  name: keyof WeekDays;
  workingHours: WeekDays;
  setWorkingHours: (value: React.SetStateAction<WeekDays>) => void;
}

export const Row: FC<IProps> = ({
  text,
  name,
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

  const handleChangeHours =
    (idx: number, isFirst: boolean = false) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const name = e.target.name as keyof WeekDays;

      setWorkingHours((curr) => ({
        ...curr,
        [name]: {
          ...curr[name],
          timePeriods: curr[name].timePeriods.map((el, i) => {
            if (i === idx) {
              const dotIndex = el.indexOf('-');

              if (isFirst) {
                return `${e.target.value}${el.slice(dotIndex)}`;
              }
              return `${el.slice(0, dotIndex + 1)}${e.target.value}`;
            } else {
              return el;
            }
          }),
        },
      }));
    };

  const addMorePeriods = () => {
    setWorkingHours((curr) => ({
      ...curr,
      [name]: {
        ...curr[name],
        timePeriods: [...curr[name].timePeriods, '00:00-00:00'],
      },
    }));
  };

  const removePeriod = (idx: number) => {
    setWorkingHours((curr) => {
      const periods = curr[name].timePeriods;

      return {
        ...curr,
        [name]: {
          ...curr[name],
          timePeriods: [...periods.slice(0, idx), ...periods.slice(idx + 1)],
        },
      };
    });
  };

  return (
    <div className={styles.row}>
      <div className={styles.day}>
        <CheckBox
          text={text}
          handleChange={handleChangeWorkDay}
          name={name}
          isChecked={workingHours[name].selected}
        />
      </div>
      <div className={styles.periods}>
        {workingHours[name].timePeriods.map((_, idx) => {
          const period = workingHours[name].timePeriods[idx];
          const index = period.indexOf('-');

          return (
            <div className={styles.periodWrapper} key={uuidv4()}>
              <select
                name={name}
                className={styles.period}
                value={period?.slice(0, index)}
                onChange={(e) => handleChangeHours(idx, true)(e)}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              -
              <select
                name={name}
                className={styles.period}
                onChange={(e) => handleChangeHours(idx)(e)}
                value={period?.slice(index + 1)}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {Boolean(idx) && (
                <Button
                  green={true}
                  className={styles.remove}
                  text='-'
                  onClick={() => removePeriod(idx)}
                />
              )}
            </div>
          );
        })}
      </div>

      <button className={styles.button} onClick={addMorePeriods}>
        {texts['admin.add.more.time.periods']}
      </button>
    </div>
  );
};
