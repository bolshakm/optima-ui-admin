import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { ICafe, WeekDays } from 'common/types';
import { useAdminStore } from 'pages/adminPanel/store';
import { InfoBlock } from '../infoBlock';
import { weekDays } from 'common/data';
import { Row } from './Row';
import { cafeService } from 'services/cafeService';
import toast, { Toaster } from 'react-hot-toast';
import { toastSettings } from 'common/data/toastSettings';
import { useLanguageStore } from 'store';

interface IProps {
  restaurant: ICafe;
}

export const TimeBlock: FC<IProps> = ({ restaurant }) => {
  const { texts, updateRestaurant } = useAdminStore();
  const [workingHours, setWorkingHours] = useState(weekDays);
  const { errorText } = useLanguageStore();

  useEffect(() => {
    const existPeriods = restaurant.workingHours?.reduce((acc, day) => {
      return {
        ...acc,
        [day.day]: {
          selected: true,
          timePeriods: day.time.split(','),
        },
      };
    }, {});
    setWorkingHours((curr) => ({ ...curr, ...existPeriods }));
  }, [restaurant]);

  const handleSubmit = () => {
    const data: string[] = Object.keys(workingHours);
    const hours = [];

    for (const key of data) {
      if (workingHours[key as keyof WeekDays].selected) {
        hours.push({
          day: key,
          time: workingHours[key as keyof WeekDays].timePeriods.join(','),
        });
      }
    }

    cafeService
      .update({ body: { workingHours: hours, id: restaurant.id } })
      .then(updateRestaurant)
      .catch((err) => {
        console.log(err);
        toast.error(errorText);
      });
  };

  return (
    <InfoBlock title={texts['admin.working.hours']} handleSubmit={handleSubmit}>
      <Toaster toastOptions={{ ...toastSettings }} />
      <div className={styles.block}>
        <Row
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          text={texts['admin.monday']}
          name='Mon'
        />
        <Row
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          text={texts['admin.tuesday']}
          name='Tue'
        />
        <Row
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          text={texts['admin.wednesday']}
          name='Wed'
        />
        <Row
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          text={texts['admin.thursday']}
          name='Thu'
        />
        <Row
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          text={texts['admin.friday']}
          name='Fri'
        />
        <Row
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          text={texts['admin.saturday']}
          name='Sat'
        />
        <Row
          workingHours={workingHours}
          setWorkingHours={setWorkingHours}
          text={texts['admin.sunday']}
          name='Sun'
        />
      </div>
    </InfoBlock>
  );
};
