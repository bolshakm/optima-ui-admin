import React from 'react';
import { RouterProvider } from 'libraries';
import { Navigation } from 'navigation';

export const App = () => {
  return (
    <RouterProvider>
      <div className='page-template'>
        <Navigation />
      </div>
    </RouterProvider>
  );
};
