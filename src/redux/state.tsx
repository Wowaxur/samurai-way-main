const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type profilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    id: number;
    message: string;
    likesCount: number;
};
export type DialogsType = {
    id: number;
    name: string;
};

export type messagesPageType = {
    messages: MessageType[];
    dialogs: DialogsType[];
    newMessageText: string;
};
export type StateType = {
    profilePage: profilePageType;
    dialogsPage: messagesPageType;
};

export type StoreType = {
    _state: StateType;
    getState: () => StateType;
    _callSubscriber: (state: StateType) => void;
    dispatch: (action: any) => void;
    subscribe: (observer: ()=>void) => void;
};

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Hi, how are you",
                    likesCount: 0,
                },
                {
                    id: 2,
                    message: "I`ts my first post",
                    likesCount: 13,
                },
            ],
            newPostText: "it-Kamasutra",
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Igor",
                },
                {
                    id: 2,
                    name: "Olga",
                },
                {
                    id: 3,
                    name: "Sasha",
                },
            ],
            messages: [
                {
                    id: 1,
                    message: "Hi",
                },
                {
                    id: 2,
                    message: "How are you?",
                },
                {
                    id: 3,
                    message: "Hellow",
                },
            ],
            newMessageText: "",
        },
    },
    _callSubscriber(state: StateType) {
        console.log("state was rerendered");
    },
    getState() {
        return this._state;
    },
    subscribe(observer: Function) {
        // @ts-ignore
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: Date.now(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = 'Your News';
            this._callSubscriber(this._state);


        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);

        }else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber(this._state)
        }
        else if (action.type === SEND_MESSAGE){
           let text =  this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messages.unshift({id:this._state.dialogsPage.messages.length + 1, message: text})
            this._callSubscriber(this._state)
        }


    }
}
export const AddPostActionCreator = () => {
    return {
        type: ADD_POST,

    }
}
export const UpdateNewPostActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    }
}
export const UpdateNewMessageActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}
export const SendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export default store;
