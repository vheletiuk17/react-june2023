import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={"/albums"}>All Albums</NavLink>
        </div>
    );
};

export {Header};