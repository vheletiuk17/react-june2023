import React from 'react';

const PostDetails = ({postsDetails}) => {
    const {userId, id,title, body} = postsDetails;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};