import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { routerKeys, storageKeys } from "common/constants";

export const PublicRoutes = () => {
    const token = localStorage.getItem(storageKeys.token);

    return !token ? <Outlet /> : <Navigate to={routerKeys.admin} />;
};
