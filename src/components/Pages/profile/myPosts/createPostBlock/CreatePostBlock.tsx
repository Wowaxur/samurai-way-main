import React, {useRef, useState} from 'react';
import s from './CreatePostBlock.module.css';


interface CreatePostBlockProps {
    addPost: (text: string) => void;
}

const CreatePostBlock: React.FC<CreatePostBlockProps> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent the default form submission
        // Using a non-null assertion operator (!) to bypass TypeScript's safety checks
        let text = newPostElement.current!.value;
        props.addPost(text);
        newPostElement.current!.value = ''; // Clear the textarea after posting
    };



    return (
        <form className={s.PostBlock}>
            <h2 className={s.PostTitle}>My Posts</h2>
            <div className={s.CreatePostBlockForm}>
                <div className={s.InputContainer}>
                     <textarea
                         ref={newPostElement}
                         className={s.CreateNewPostArea}
                         placeholder="Your News"
                     />
                    <button
                        className={s.CreateNewPostBtn}
                        type="submit"
                        onClick={addPost}
                    >Post
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreatePostBlock;