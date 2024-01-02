import React from "react";
import s from './NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={s.NavBar}>
            <span><a className={s.link} href='/profile'>Profile</a></span>
            <span><a className={s.link} href='/dialogs'>Messages</a></span>
            <span><a className={s.link} href='/news'>News</a></span>
            <span><a  className={s.link}href='/music'>Music</a></span>
            <br/>
            <span><a  className={s.link}href='/settings'>Settings</a></span>


        </nav>
    )
}
export default NavBar