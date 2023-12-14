import React from "react";
import s from './NavBar.module.css'


const NavBar = () => {
    return (
        <nav className={s.NavBar}>
            <span><a className={s.link} href='#'>Profile</a></span>
            <span><a className={s.link} href='#'>Messages</a></span>
            <span><a className={s.link} href='#'>News</a></span>
            <span><a  className={s.link}href='#'>Music</a></span>
            <br/>
            <span><a  className={s.link}href='#'>Settings</a></span>


        </nav>
    )
}
export default NavBar