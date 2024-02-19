import React from "react";
import LokiFace from '../../images/lokiface.png'
import s from './Profile.module.css'
import {ProfileTextBlock} from "./porfileTextBlock/ProfileTextBlock";
import PostsBlock from "./myPosts/postsBlock/PostsBlock";
import {RootStateType} from "../../../redux/state";


const Profile = (props : any) => {

    return (
        <div className={s.MainContent}>
            <img className={s.FrontImg} src={"https://i.pinimg.com/736x/47/df/c8/47dfc8171983fd4c6b0056128893b02b.jpg"}
                 alt={'1232'}/>
            <div className={s.ProfileWrapper}>
                <img className={s.LokiFace} src={LokiFace} alt={'123'}/>
                <ProfileTextBlock user={props.state.user} />
            </div>
            <PostsBlock posts={props.state.profilePage.posts} addPost={props.addPost} />
        </div>
    )
}
export default Profile