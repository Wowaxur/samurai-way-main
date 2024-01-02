import React, { useState } from 'react';
import s from './CreatePostBlock.module.css';

type CreatePostBlockProps = {
    onAddPost?: (text: string) => void;
};

const CreatePostBlock: React.FC<CreatePostBlockProps> = ({ onAddPost }) => {
    const [postText, setPostText] = useState('');

    const handlePostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostText(event.target.value);
    };

    const handlePostSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (postText.trim() !== '') {
            onAddPost?.(postText);
            setPostText('');
        }
    };

    return (
        <div className={s.PostBlock}>
            <h2 className={s.PostTitle}>My Posts</h2>
            <form className={s.CreatePostBlockForm} onSubmit={handlePostSubmit}>
                <div className={s.InputContainer}>
                    <input
                        className={s.CreateNewPostArea}
                        type="text"
                        placeholder="Your News"
                        value={postText}
                        onChange={handlePostChange}
                    />
                    <button className={s.CreateNewPostBtn} type="submit">
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostBlock;