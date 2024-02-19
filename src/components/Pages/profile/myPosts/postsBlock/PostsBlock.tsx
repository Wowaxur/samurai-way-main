    import React, { useState } from 'react';
    import s from './PostsBlock.module.css'
    import {PostType, userDb} from '../../../../../redux/state';
    import CreatePostBlock from "../createPostBlock/CreatePostBlock";

    type dbPostsType = {
        message: string;
        image?: string;
        userId?: number;
        likesCount?: number
    };



    const PostsBlock = (props: any) => {
        const [dbposts, setDbposts] = useState<dbPostsType[]>(props.posts);
        // const handleAddPost = (text: string) => {
        //     const newPost: dbPostsType = {
        //         message: text,
        //         userId: userDb[0].userId, // Set the userId according to your logic
        //         likesCount: 0,
        //     };
        //     return([newPost,...props.posts]);
        // };

        return (
            <div className={s.PostsBlock}>
                <CreatePostBlock addPost={props.addPost} />
                {dbposts.map((post, index) => {
                    const user = userDb.find(u => u.userId === post.userId);
                    // Skip post if user is not found
                    if (!user) return null;

                    return (
                        <div key={index} className={s.PostWrapper}>
                            <div className={s.UserInfo}>
                                <img className={s.UserAvatar} src={user.avatar} alt={'123'} />
                                <span className={s.UserName}>{user.name}</span>
                                <div className={s.likesCounter}>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
                                        <g id="like">
                                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M29.164,10.472c-1.25-0.328-4.189-0.324-8.488-0.438   c0.203-0.938,0.25-1.784,0.25-3.286C20.926,3.16,18.312,0,16,0c-1.633,0-2.979,1.335-3,2.977c-0.022,2.014-0.645,5.492-4,7.256   c-0.246,0.13-0.95,0.477-1.053,0.522L8,10.8C7.475,10.347,6.747,10,6,10H3c-1.654,0-3,1.346-3,3v16c0,1.654,1.346,3,3,3h3   c1.19,0,2.186-0.719,2.668-1.727c0.012,0.004,0.033,0.01,0.047,0.012c0.066,0.018,0.144,0.037,0.239,0.062   C8.972,30.352,8.981,30.354,9,30.359c0.576,0.143,1.685,0.408,4.055,0.953C13.563,31.428,16.247,32,19.027,32h5.467   c1.666,0,2.867-0.641,3.582-1.928c0.01-0.02,0.24-0.469,0.428-1.076c0.141-0.457,0.193-1.104,0.023-1.76   c1.074-0.738,1.42-1.854,1.645-2.58c0.377-1.191,0.264-2.086,0.002-2.727c0.604-0.57,1.119-1.439,1.336-2.766   c0.135-0.822-0.01-1.668-0.389-2.372c0.566-0.636,0.824-1.436,0.854-2.176l0.012-0.209C31.994,14.275,32,14.194,32,13.906   C32,12.643,31.125,11.032,29.164,10.472z M7,29c0,0.553-0.447,1-1,1H3c-0.553,0-1-0.447-1-1V13c0-0.553,0.447-1,1-1h3   c0.553,0,1,0.447,1,1V29z M29.977,14.535C29.957,15.029,29.75,16,28,16c-1.5,0-2,0-2,0c-0.277,0-0.5,0.224-0.5,0.5S25.723,17,26,17   c0,0,0.438,0,1.938,0s1.697,1.244,1.6,1.844C29.414,19.59,29.064,21,27.375,21C25.688,21,25,21,25,21c-0.277,0-0.5,0.223-0.5,0.5   c0,0.275,0.223,0.5,0.5,0.5c0,0,1.188,0,1.969,0c1.688,0,1.539,1.287,1.297,2.055C27.947,25.064,27.752,26,25.625,26   c-0.719,0-1.631,0-1.631,0c-0.277,0-0.5,0.223-0.5,0.5c0,0.275,0.223,0.5,0.5,0.5c0,0,0.693,0,1.568,0   c1.094,0,1.145,1.035,1.031,1.406c-0.125,0.406-0.273,0.707-0.279,0.721C26.012,29.672,25.525,30,24.494,30h-5.467   c-2.746,0-5.47-0.623-5.54-0.639c-4.154-0.957-4.373-1.031-4.634-1.105c0,0-0.846-0.143-0.846-0.881L8,13.563   c0-0.469,0.299-0.893,0.794-1.042c0.062-0.024,0.146-0.05,0.206-0.075c4.568-1.892,5.959-6.04,6-9.446c0.006-0.479,0.375-1,1-1   c1.057,0,2.926,2.122,2.926,4.748C18.926,9.119,18.83,9.529,18,12c10,0,9.93,0.144,10.812,0.375C29.906,12.688,30,13.594,30,13.906   C30,14.249,29.99,14.199,29.977,14.535z"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M4.5,26C3.672,26,3,26.672,3,27.5S3.672,29,4.5,29   S6,28.328,6,27.5S5.328,26,4.5,26z M4.5,28C4.225,28,4,27.775,4,27.5S4.225,27,4.5,27S5,27.225,5,27.5S4.775,28,4.5,28z"/>
                                        </g>
                                    </svg>
                                    {post.likesCount}
                                </div>
                            </div>
                            <div className={s.postArea}>
                                <p>{post.message}</p>
                                {post.image && <img className={s.postImage} src={post.image} alt="Image" />}
                            </div>


                        </div>
                    );
                })}

            </div>
        );
    };

    export default PostsBlock;
    <div></div>