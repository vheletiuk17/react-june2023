import React from 'react';
import {Comment} from "./Comment";

const Comments = ({comments}) => {

    return (
        <div>
            {comments.map(comments =><Comment key={comments.id} comments={comments}/>)}
        </div>
    );
};

export {Comments};