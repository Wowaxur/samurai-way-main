import React, {useState} from 'react';
import s from './Dialogs.module.css';
import state, {userDb} from "../../../redux/state";
import {message} from "antd";
type dialogsType={
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<MessageType>
}

const Dialogs = () => {
    let [dbdialogs, setdbDialogs] = useState<dialogsPageType>(state.dialogsPage)
    let [selectedUserId, setSelectedUserId] = useState<null | number>(null);

    return (
        <div className={s.DialogsContent}>
            <div className={s.UserDialogsList}>
                <h2> Dialogs</h2>
                {dbdialogs.dialogs.map(dialog => (
                    <div
                        key={dialog.id}
                        className={`${s.UserDialog} ${dialog.id === selectedUserId ? s.ActiveUserDialog : ''}`}
                        onClick={() => setSelectedUserId(dialog.id)}
                    >
                        {dialog.name}
                    </div>
                ))}
            </div>
            <div className={s.MesageList}>
                <h2> Messages</h2>
                {selectedUserId && dbdialogs.messages.filter(message => message.id === selectedUserId).map(message => {
                    const user = dbdialogs.dialogs.find(user => user.id === message.id);
                    return (
                        <div key={message.id} className={s.UserDialog}>
                            {user ? `${user.name}: ${message.message}` : message.message}
                        </div>
                    )
                })}
                <input/>
            </div>
        </div>
    );
};

export default Dialogs;