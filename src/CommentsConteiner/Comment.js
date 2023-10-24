import React from 'react';

const Comment = ({comment}) => {
    const {id, title, body} = comment
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Comment};