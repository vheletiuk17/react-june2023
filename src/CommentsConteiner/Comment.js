import React from 'react';

const Comment = ({comment}) => {
    const {id, title, body} = comment;
    return (
        <div style={{width: '50%'}}>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Comment};