import React from 'react';
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";

const LayoutPages = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {LayoutPages};