import React, {useEffect, useState} from 'react';

import {User} from "./User";

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character').then(value => value.json()).then(items => {
        for (let itemsKey in items) {
            setUsers(items[itemsKey])

        }

    })
}, []);
return(
    <div>
        {users.map(value => <User key={value.id} item={value} />)}
    </div>

);
};

export {Users};
