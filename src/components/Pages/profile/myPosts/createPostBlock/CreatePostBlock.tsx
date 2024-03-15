import React from 'react';
import s from './CreatePostBlock.module.css';
import {AddPostActionCreator, UpdateNewPostActionCreator} from "../../../../../redux/state";



// interface CreatePostBlockProps {
//
//     dispatch: (text: string) => void
// }
type CreatePostBlockProps = {
    state: {
        newPostText: string;
    };
    dispatch: (action: any) => void;
};
const CreatePostBlock: React.FC<CreatePostBlockProps> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = (event: React.FormEvent) => {
        event.preventDefault();
        props.dispatch(AddPostActionCreator());
    };
    const onPostChange = () => {
        let text = newPostElement.current!.value;
        //props.updateNewPostText(text);
        //let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(UpdateNewPostActionCreator(text));
    };
    return (
        <form className={s.PostBlock}>
            <h2 className={s.PostTitle}>My Posts</h2>
            <div className={s.CreatePostBlockForm}>
                <div className={s.InputContainer}>
                     <textarea
                         className={s.CreateNewPostArea}
                         onChange={onPostChange}
                         ref={newPostElement}
                         placeholder={props.state.newPostText}

                    />
                    <button
                        className={s.CreateNewPostBtn}
                      //  type="submit"
                        onClick={addPost}
                    >Post
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreatePostBlock;