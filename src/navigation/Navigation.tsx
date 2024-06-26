import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routerKeys } from 'common/constants';
import { PrivateRoutes } from './PrivateRoutes';
import { ForgotPage, LoginPage, RegistrationPage } from 'pages/auth';
import { AdminPanel } from 'pages/adminPanel';
import { PublicRoutes } from './PublicRoutes';

export const Navigation = () => (
  <Routes>
    <Route element={<PrivateRoutes />}>
      <Route
        path={routerKeys.root}
        element={<Navigate to={routerKeys.admin} replace={true} />}
      />
      <Route path={routerKeys.admin} element={<AdminPanel />} />
    </Route>
    <Route element={<PublicRoutes />}>
      <Route path={routerKeys.auth}>
        <Route path={routerKeys.login} element={<LoginPage />} />
        <Route path={routerKeys.registration} element={<RegistrationPage />} />
        <Route path={routerKeys.forgotPassword} element={<ForgotPage />} />
        <Route
          index={true}
          element={<Navigate to={routerKeys.login} replace={true} />}
        />
      </Route>
    </Route>

    <Route
      path={routerKeys.any}
      element={<Navigate to={routerKeys.root} replace={true} />}
    />
  </Routes>
);
