
import BreakingNews from '@/components/BreakingNews';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            {children}
        </>
    );
};

export default MainLayout;