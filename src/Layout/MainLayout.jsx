import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Componants/NavBar';
import Footer from '../Componants/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet> 
        </div>
    );
};

export default MainLayout;