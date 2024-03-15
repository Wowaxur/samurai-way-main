import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    messagesPageType,
    SendMessageActionCreator,
    StoreType,
    UpdateNewMessageActionCreator
} from "../../../redux/state";




interface DialogsProps {
    state: messagesPageType;
    store: StoreType;
}
const Dialogs: React.FC<DialogsProps> = ({ state, store }) => {



    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} /> );
    let newMessageBody = state.newMessageText;

    let onSendMessageClick = () => {
        store.dispatch(SendMessageActionCreator());
    }

    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        store.dispatch(UpdateNewMessageActionCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div >{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;