import React from 'react';
import s from "./UserDialogList.module.css";
import {dialogsPageType} from "../../../../../redux/state";

export type UserDialogListProps = {
    dbdialogs: dialogsPageType,
    selectedUserId: number | null,
    setSelectedUserId: (id: number | null) => void
}

const UserDialogList: React.FC<UserDialogListProps> = ({ dbdialogs, selectedUserId, setSelectedUserId }) => {
    return (
        <div className={s.UserDialogsList}>
            <h2> Dialogs</h2>
            {dbdialogs.dialogs.map(dialog => {
                if (dialog.id === 0) return null; // Skip the user with id 0
                return (

                    <div
                        key={dialog.id}
                        className={`${s.UserDialog} ${dialog.id === selectedUserId ? s.ActiveUserDialog : ''}`}
                        onClick={() => setSelectedUserId(dialog.id)}
                    >
                        {<span>(IMG)</span>} {dialog.name}
                    </div>
                );
            })}
        </div>
    );
};

export default UserDialogList;