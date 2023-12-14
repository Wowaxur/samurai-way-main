import React from 'react';
import CreatePostBlock from "./createPostBlock/CreatePostBlock";
import PostsBlock from "./postsBlock/PostsBlock";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <CreatePostBlock/>
            <PostsBlock/>
        </div>
    );
};

export default MyPosts;