import React, { FC, useState } from 'react';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { ICafeDto } from 'common/types';
import { RestaurantInfoDropdown } from '../restaurantInfoDropdown';
import { InfoBlock } from '../infoBlock';
import { useFormik } from 'formik';
import { createSchema } from 'pages/adminPanel/shcemas';
import { cafeService } from 'services/cafeService';
import { LanguageBlock } from '../languageBlock';
import { SocialBlock } from '../socialBlock';

interface IProps {
  restaurant: ICafeDto;
  toCreate?: boolean;
}

export const RestaurantInfo: FC<IProps> = ({
  restaurant,
  toCreate = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setRestaurantName } = useAdminStore();
  const { texts } = useAdminStore();

  const { values, touched, errors, handleChange, handleSubmit } =
    useFormik<ICafeDto>({
      initialValues: {
        name: restaurant.name,
        defLang: restaurant.defLang,
        facebook: restaurant.facebook,
        instagram: restaurant.instagram,
        tripAdvisor: restaurant.tripAdvisor,
        googleReview: restaurant.googleReview,
        bannerUrl: restaurant.bannerUrl,
        workingHours: restaurant.workingHours,
        languageSet: restaurant.languageSet,
      },
      validationSchema: createSchema,
      validateOnBlur: true,
      validateOnChange: true,
      validateOnMount: true,
      enableReinitialize: true,
      onSubmit: (body) => {
        if (toCreate) {
          cafeService.create({ body }).then(() => {});
        } else {
          cafeService
            .update({ id: restaurant.id || 0, body: values })
            .then(() => {});
        }
      },
    });

  const toggleExpanded = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setRestaurantName('');
    } else {
      setIsExpanded(false);
      setRestaurantName(restaurant.name || '');
    }
    setIsExpanded(!isExpanded);
  };

  const navigateToBlock = (key: string) => {
    console.log(key);
  };

  if (!restaurant) return;

  return (
    <div className={styles.content}>
      <RestaurantInfoDropdown
        isExpanded={isExpanded}
        setIsExpanded={toggleExpanded}
        name={restaurant.name || ''}
        navigateToBlock={navigateToBlock}
      />
      <form className={styles.inner} onSubmit={handleSubmit}>
        <LanguageBlock
          touched={touched}
          errors={errors}
          restaurantId={restaurant.id}
          values={values}
          onChange={handleChange}
        />
        <InfoBlock title={texts['admin.working.hours']}>
          <SocialBlock
            touched={touched}
            errors={errors}
            values={values}
            onChange={handleChange}
          />
        </InfoBlock>
        <InfoBlock title={texts['admin.social.media']}>
          <></>
        </InfoBlock>
        <InfoBlock title={texts['admin.general.banner']}>
          <></>
        </InfoBlock>
      </form>
    </div>
  );
};
