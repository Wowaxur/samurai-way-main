
import React, { useState } from 'react';
import s from './PostsBlock.module.css'
import { userDb } from "../../../UsersDb/UsersDB";
import CreatePostBlock from "../createPostBlock/CreatePostBlock";

type dbPostsType = {
    text: string;
    image?: string;
    userId: number;
};

const initialPosts: dbPostsType[] = [
    {
        userId: 1,
        text: 'Hello World! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vitae?',
        image: 'https://avatars.githubusercontent.com/u/62997222?v=4',
    },
    {
        userId: 2,
        text: 'When he asked her favorite number, she answered without hesitation that it was diamonds.',
    },
    {
        userId: 1,
        text: 'Im a great listener, really good with empathy vs sympathy and all that, but I hate people.',
    },
    {
        userId: 2,
        text: 'When he asked her favorite number, she answered without hesitation that it was diamonds.',
        image:"https://files.realpython.com/media/random_data_watermark.576078a4008d.jpg",
    },
];

const PostsBlock = () => {
    const [dbposts, setDbposts] = useState<dbPostsType[]>(initialPosts);

    const handleAddPost = (text: string) => {
        const newPost: dbPostsType = {
            text: text,
            userId: 1, // Set the userId according to your logic
        };
        setDbposts([newPost,...dbposts]);
    };

    return (
        <div className={s.PostsBlock}>
            <CreatePostBlock onAddPost={handleAddPost} />
            {dbposts.map((post, index) => {
                const user = userDb.find((user) => user.userId === post.userId);
                if (!user) return null; // Skip post if user is not found
                return (
                    <div key={index} className={s.PostWrapper}>
                        <div className={s.UserInfo}>
                            <img className={s.UserAvatar} src={user.avatar} alt={'123'} />
                            <span className={s.UserName}>{user.name}</span>
                        </div>
                        <div className={s.postArea}>
                            <p>{post.text}</p>
                            {post.image && <img className={s.postImage} src={post.image} alt="Image" />}
                        </div>
                    </div>
                );
            })}

        </div>
    );
};

export default PostsBlock;
