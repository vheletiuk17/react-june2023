import React from 'react';
import {useForm} from "react-hook-form";
import async from "async";
import {commentService} from "../service/commentService";

const CommentForm = (setComments) => {
    const {reset, register, handleSubmit} = useForm();

    const save = async(comment) =>{
        const {data} = await commentService.create(comment)
        setComments(prev => [...prev, data])
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'id'} {...register('id')}/>
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Create Comment</button>
        </form>
    );
};

export {CommentForm};