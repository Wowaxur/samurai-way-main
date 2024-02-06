import React, {useState} from 'react';
import s from './Dialogs.module.css';
import state, {dialogsPageType, RootStateType, userDb} from "../../../redux/state";
import UserDialogList from "./dialogComponents/userDialogList/UserDialogList";
import MessageList from "./dialogComponents/messageList/MessageList";


const Dialogs = (props: { state: RootStateType }) => {
    let [inputValue, setInputValue] = useState("");
    let [dbdialogs, setdbDialogs] = useState<dialogsPageType>(props.state.dialogsPage)
    let [selectedUserId, setSelectedUserId] = useState<null | number>(null);



    const sendMessage = () => {
        if (inputValue.trim() !== "") {
            setdbDialogs({
                ...dbdialogs,
                messages: [...dbdialogs.messages, { id: 0, message: inputValue }]
            });
            setInputValue("");
        }
    }
    return (
        <div className={s.DialogsContent}>
            <UserDialogList dbdialogs={dbdialogs} selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId}/>
            <MessageList inputValue={inputValue} selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} sendMessage={sendMessage} setInputValue={setInputValue} dbdialogs={dbdialogs}/>
        </div>
    );
};
export default Dialogs;