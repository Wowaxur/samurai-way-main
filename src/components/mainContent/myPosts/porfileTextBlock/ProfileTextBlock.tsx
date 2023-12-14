import React from 'react';
import s from './ProfileTextBlock.module.css'

export const ProfileTextBlock = () => {
    let [User] = ([
        {id: 1,
            name: "Vladislav Vakula",
            dateOfBirth: '1 December 1997',
            address: {
                city: {
                    title: "Krasnodar",
                    country: "Russia"
                },
                street: "Naberezhnaya"
            },
            education : 'KubSTU',
            webSite : {
                webSiteTitle : 'Github',
                webSiteUrl : 'https://github.com/Wowaxur',
            },
        }
    ])

    return (
        <div key={User.id} className={s.ProfileTextBlock}>
            <h3>{User.name}</h3>
            <span>Date of birth: {User.dateOfBirth}</span>
            <span>City: {User.address.city.title}</span>
            <span>Education: {User.education}</span>
            <span>Web-site: <a href={User.webSite.webSiteUrl} target='_blank'>{User.webSite.webSiteTitle}</a></span>

        </div>
    );
};

