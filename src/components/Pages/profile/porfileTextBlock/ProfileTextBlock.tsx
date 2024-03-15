import React from 'react';
import s from './ProfileTextBlock.module.css'

export const ProfileTextBlock = (props : any) => {


    return (
        <div  className={s.ProfileTextBlock}>
            <h3>Vlad</h3>
            <span>Date of birth: 01.12.1997</span>
            <span>City:Krasnodar</span>
            <span>Education: Kubstu</span>
            <span>Web-site: <a href='' target='_blank'></a></span>

        </div>
    );
};

