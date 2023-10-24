import React from 'react';
import {UsersConteiner} from "./UsersContainer/UsersConteiner";
import {CommentsConteiner} from "./CommentsConteiner/CommentsConteiner";

const App = () => {
    return (
        <div>
            <UsersConteiner/>
            <CommentsConteiner/>

        </div>
    );
};

export {App};