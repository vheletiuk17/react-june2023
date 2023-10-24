import React, {useEffect, useState} from 'react';
import {commentService} from "../service/commentService";
import {CommentForm} from "./CommentForm";

const CommentsConteiner = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll()
            .then(({data}) => setComments(data))
    }, []);
    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <CommentsConteiner/>
        </div>
    );
};

export {CommentsConteiner};