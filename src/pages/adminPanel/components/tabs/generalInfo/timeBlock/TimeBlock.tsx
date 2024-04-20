import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { ICafe, WeekDays } from 'common/types';
import { createTimeOptions } from 'common/utils';
import { useAdminStore } from 'pages/adminPanel/store';
import { InfoBlock } from '../infoBlock';
import { CheckBox } from 'components';
import { weekDays } from 'common/data';

interface IProps {
  restaurant: ICafe;
}

export const TimeBlock: FC<IProps> = ({ restaurant }) => {
  const options = createTimeOptions();
  const { texts } = useAdminStore();
  const [workingHours, setWorkingHours] = useState(weekDays);

  useEffect(() => {
    const existPeriods = restaurant.workingHours.reduce((acc, day) => {
      return {
        ...acc,
        [day.day]: {
          selected: true,
          timePeriods: day.time,
        },
      };
    }, {});
    setWorkingHours((curr) => ({ ...curr, ...existPeriods }));
  }, [restaurant]);

  const handleSubmit = () => {
    // cafeService.update({ id: restaurant.id, body: { workingHours } }).then(() => {});
  };

  const handleChangeWorkDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof WeekDays;

    setWorkingHours((curr) => ({
      ...curr,
      [name]: { ...curr[name], selected: !curr[name].selected },
    }));
  };

  return (
    <InfoBlock title={texts['admin.working.hours']} handleSubmit={handleSubmit}>
      <div className={styles.block}>
        {/* <Row workingHours={workingHours} setWorkingHours={setWorkingHours} text={texts['admin.monday']} key='Mon' /> */}
        <div className={styles.row}>
          <div className={styles.day}>
            <CheckBox
              text={texts['admin.monday']}
              handleChange={handleChangeWorkDay}
              name='Mon'
              isChecked={workingHours['Mon' as keyof WeekDays].selected}
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
      </div>
    </InfoBlock>
  );
};
