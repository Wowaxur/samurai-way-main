import React from 'react';
import s from './ProfileTextBlock.module.css'
import { UserType} from "../../../../redux/state";

export const ProfileTextBlock = (props: { user: UserType }) => {


    return (
        <div key={props.user.id} className={s.ProfileTextBlock}>
            <h3>{props.user.name}</h3>
            <span>Date of birth: {props.user.dateOfBirth}</span>
            <span>City: {props.user.address.city.title}</span>
            <span>Education: {props.user.education}</span>
            <span>Web-site: <a href={props.user.webSite.webSiteUrl} target='_blank'>{props.user.webSite.webSiteTitle}</a></span>

        </div>
    );
};

