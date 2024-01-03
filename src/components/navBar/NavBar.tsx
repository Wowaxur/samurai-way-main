import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={s.NavBar}>
            <span className={s.specButton}><NavLink className={s.link} activeClassName={s.activeLink} to={'/profile' }>Profile</NavLink></span>
            <span className={s.specButton}><NavLink className={s.link} activeClassName={s.activeLink} to='/dialogs'>Messages</NavLink></span>
            <span className={s.specButton}><NavLink className={s.link} activeClassName={s.activeLink} to='/news'>News</NavLink></span>
            <span className={s.specButton}><NavLink  className={s.link} activeClassName={s.activeLink}to='/music'>Music</NavLink></span>
            <br/>
            <span className={s.specButton}> <NavLink  className={s.link} activeClassName={s.activeLink} to='/settings'>Settings</NavLink></span>


        </nav>
    )
}
export default NavBar