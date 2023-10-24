import React from 'react';
import {useForm} from "react-hook-form";
import async from "async";
import {userService} from "../service/userService";

const UserForm = ({setUsers}) => {
    const {reset,handleSubmit,register} = useForm();

    const save = async(user) =>{
        const {data} = await userService.create(user);
        setUsers(prev => [...prev, data])
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Create User</button>
        </form>
    );
};

export {UserForm};