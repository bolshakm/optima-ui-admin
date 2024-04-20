import { checkToken } from 'common/utils';
import { Navigation } from 'navigation';
import React, { useEffect } from 'react';

export const AppContent = () => {
  useEffect(() => {
    checkToken();
  }, []);
  
  return (
    <div className='page-template'>
      <Navigation />
    </div>
  );
};
