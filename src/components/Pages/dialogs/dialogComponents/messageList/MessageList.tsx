import React from 'react';
import s from "./MessageList.module.css";
import {UserDialogListProps} from "../userDialogList/UserDialogList";

type MessageListProps = UserDialogListProps & {
    inputValue: string,
    setInputValue: (value: string) => void,
    sendMessage: () => void
}

const MessageList: React.FC<MessageListProps> = (p : MessageListProps) => {

    const InputMessageHandler = (event:  React.ChangeEvent<HTMLTextAreaElement>) => {
        p.setInputValue(event.target.value);
    }
    return (
        <div className={s.MesageList}>
            <h2> Messages</h2>
            {p.selectedUserId !== null && p.dbdialogs.messages.filter(message => message.id === p.selectedUserId || message.id === 0).map(message => {
                const user = p.dbdialogs.dialogs.find(user => user.id === message.id);
                return (
                    <div key={message.id} className={`${s.UserDialog} ${message.id === 0 ? s.userMessages : s.friendMessage}`}>
                        <span>  {user ? `${user.name}: ${message.message}` : message.message}</span>
                        <br/>
                    </div>
                )
            })}
            {p.selectedUserId && (
                <div className={s.InputArea}>
                        <textarea
                            className={s.MessageInput}
                            value={p.inputValue}
                            placeholder={'Type your message'}
                            onChange={InputMessageHandler}
                        />
                    <button
                        className={s.SendButton}
                        onClick={p.sendMessage}
                    >
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

export default MessageList;