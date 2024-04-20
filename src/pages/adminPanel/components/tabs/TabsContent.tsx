import React, { FC } from 'react';
import { GeneralInfo } from './generalInfo';

interface IProps {
  selectedTab: string;
}

export const TabsContent: FC<IProps> = ({ selectedTab }) => {
  switch (selectedTab) {
    case 'admin.general.info.button':
      return <GeneralInfo />;
    default:
      return null;
  }
};
