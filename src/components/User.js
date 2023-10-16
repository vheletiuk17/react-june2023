import React from 'react';

const User = ({item}) => {
    let {id,name,status,species,gender,image} = item
    if (id < 7) {
        return (
            <div>
                <h1>name : {name}</h1>
                <h2>id : {id}</h2>
                <h2>status : {status}</h2>
                <h2>species : {species}</h2>
                <h2>gender : {gender}</h2>
                <img src={image} alt={name}/>
            </div>
        );
    }
};

export  {User};