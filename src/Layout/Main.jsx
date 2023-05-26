import React from 'react';
import { Outlet } from 'react-router-dom';
import NabBar from '../pages/Shared/NavBar/NabBar';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;