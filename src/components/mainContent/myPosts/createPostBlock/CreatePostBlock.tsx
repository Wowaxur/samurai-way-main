import React from 'react';
import s from './CreatePostBlock.module.css';

const CreatePostBlock = () => {
    return (
        <div className={s.PostBlock}>
            <h2 className={s.PostTitle}>My Posts</h2>
            <form className={s.CreatePostBlockForm}>
                <div className={s.InputContainer}>
                    <input className={s.CreateNewPostArea} type='text' placeholder='Your News' />
                    <button className={s.CreateNewPostBtn}>Post</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostBlock;