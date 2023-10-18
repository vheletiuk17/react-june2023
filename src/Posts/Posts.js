import React, {useEffect, useState} from 'react';

import css from './Posts.module.css'
import axios from "axios";
import {Post} from "../Post/Post";
import {axiosService} from "../services/axiosService";
import {postService} from "../services/postService";
import {PostDetails} from "../PostDetails/postDetails";



const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postsDetails, setPostsDetails] = useState(null)
    
    const click = async (id) => {
      const {data} = await postService.getById(id);
      setPostsDetails(data)
    }


    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);


    return (
        <div>
        <div className={css.Posts}>
            {posts.map(post =><Post key={post.id} post={post} click={click()}/> )}
        </div>
            {
             postsDetails && <PostDetails postsDetails={postsDetails}/>
            }
        </div>
    );
};

export {Posts};