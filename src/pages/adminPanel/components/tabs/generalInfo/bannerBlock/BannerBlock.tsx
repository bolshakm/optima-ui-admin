import React, { FC, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './styles.module.css';
import { useAdminStore } from 'pages/adminPanel/store';
import { ICafe, IUpdateCafeBannerDto } from 'common/types';
import { InfoBlock } from '../infoBlock';
import { Button } from 'components';
import { cafeService } from 'services/cafeService';
import classNames from 'classnames';

interface IProps {
  restaurant: ICafe;
}

export const BannerBlock: FC<IProps> = ({ restaurant }) => {
  const { texts, updateRestaurant } = useAdminStore();
  const [fileToSend, setFileToSend] = useState<File | null>(null);
  const [error, setError] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(
    restaurant.bannerUrl || null
  );

  const onDrop = (acceptedFiles: File[]) => {
    if (error) {
      setError(false);
    }

    const file = acceptedFiles[0];
    setFileToSend(file);
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg'],
    },
    multiple: false,
  });

  const handleSubmit = () => {
    if (fileToSend) {
      const formData = new FormData() as FormData & IUpdateCafeBannerDto;

      formData.append('bannerUrl', fileToSend);
      formData.append('id', restaurant.id.toString());

      cafeService.updateBanner({ body: formData }).then(updateRestaurant);
    } else {
      setError(true);
    }
  };

  return (
    <InfoBlock
      title={texts['admin.restaurant.general.banner']}
      className={styles.language}
      handleSubmit={handleSubmit}
    >
      <div
        {...getRootProps()}
        className={classNames(styles.area, { [styles.error]: error })}
        style={{
          backgroundImage: uploadedImage ? `url(${uploadedImage})` : 'none',
        }}
      >
        <input {...getInputProps()} />
        <div className={styles.inner}>
          <Button
            className={styles.button}
            text={
              texts['admin.restaurant.upload.image.button'] || 'Upload image'
            }
          />
          <span>
            {texts['admin.restaurant.or.drug.the.file'] ||
              'or drag the file into this window'}
          </span>
        </div>
      </div>
    </InfoBlock>
  );
};
