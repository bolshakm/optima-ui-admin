import React from 'react';
import { RouterProvider } from 'libraries';
import { AppContent } from 'components';

export const App = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
};
