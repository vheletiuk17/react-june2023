import React from 'react';

const Ship = ({ship}) => {
    const {mission_name, launch_year, links} = ship
    const {mission_patch_small: img} = links
    if (launch_year< 2020){
    return (
        <div>
            <div>mission name: {mission_name}</div>
            <div>launch year: {launch_year}</div>
            <img src={img} alt={mission_name}/>

        </div>
    );
}
};

export {Ship};