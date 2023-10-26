import React from 'react';
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";
import {TodosPage} from "../Pages/TodosPage";

const MainLayout = () => {
    return (
        <div>
            <Header/>

            <Outlet/>
        </div>
    );
};

export {MainLayout};