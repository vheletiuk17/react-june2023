import React from 'react';
import {Link, NavLink} from "react-router-dom";

import css from "./Header.module.css"
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/todos'}>todos</NavLink>
        </div>
    );
};

export {Header};