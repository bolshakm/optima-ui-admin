import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<IProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
