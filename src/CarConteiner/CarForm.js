import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {

    const {reset,register,handleSubmit} = useForm();
    return (
        <form>
            <input type="text" placeholder={'id'} {...register("id")}/>
            <input type="text" placeholder={'brand'} {...register("brand")}/>
            <input type="text" placeholder={'price'} {...register("price")}/>
            <input type="text" placeholder={'year'} {...register("year")}/>
            <button>Create car</button>

        </form>
    );
};

export {CarForm};