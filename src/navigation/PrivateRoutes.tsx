import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { routerKeys, storageKeys } from "common/constants";

export const PrivateRoutes = () => {
    const token = localStorage.getItem(storageKeys.token);

    return token ? <Outlet /> : <Navigate to={routerKeys.auth} />;
};
