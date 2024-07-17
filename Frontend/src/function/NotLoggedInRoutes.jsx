import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function NotLoggedInRoutes() {
    const user = Cookies.get('user');
    return user ? <Navigate to="/search" /> : <Outlet />;
}