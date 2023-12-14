import React from 'react';
import s from './Posts.module.css'
import FrontImg from "../../../../images/front-end-development.jpg";
import LokiFace from "../../../../images/lokiface.png";
type PostPropsType = {
    text: string
    imageSrc?: string
}

const Post = (post: PostPropsType) => {
    return (
        <div className={s.PostWrapper}>
            <img className={s.LokiFace} src={LokiFace} alt={'123'}/>
            <div className={s.postArea}>
            <p>{post.text}</p>
            {post.imageSrc && <img className={s.postImage} src={post.imageSrc} alt="Image" />}
            </div>
        </div>
    );
};

export default Post;