import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function LoggedInRoutes() {
    const user = Cookies.get('user'); // Assuming 'user' cookie holds the user information
    return user ? <Outlet/> : <Navigate to="/" /> ;
}