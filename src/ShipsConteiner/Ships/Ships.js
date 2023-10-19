import React, {useEffect, useState} from 'react';
import axios from "axios";
import {shipService} from "../../sevices/shipService";
import {Ship} from "../Ship/Ship";

const Ships = () => {
    const [ships, setShips] = useState([])
    console.log(ships);
    useEffect(() => {
        shipService.getAll().then(({data}) => setShips(data))
    }, []);
    return (
        <div>
            {ships.map((ship, index) => <Ship key={index} ship={ship}/>)}
        </div>
    );
};

export {Ships};