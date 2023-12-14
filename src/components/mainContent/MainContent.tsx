import React from "react";
import FrontImg from '../images/front-end-development.jpg'
import LokiFace from '../images/lokiface.png'
import s from './MainContent.module.css'
import {ProfileTextBlock} from "./myPosts/porfileTextBlock/ProfileTextBlock";
import MyPosts from "./myPosts/MyPosts";



const MainContent = () => {

    return(
        <div className={s.MainContent}>
            <img className={s.FrontImg} src={FrontImg} alt={'1232'}/>
            <div className={s.ProfileWrapper}>
                <img className={s.LokiFace} src={LokiFace} alt={'123'}/>
                <ProfileTextBlock/>
            </div>
           <MyPosts/>

        </div>
    )
}
export default MainContent