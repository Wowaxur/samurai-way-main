import React from "react";
import s from './NavBar.module.css'
import {NavLink, useLocation} from "react-router-dom";
import { useMatch, Link } from 'react-router-dom';
type CustomNavLinkType ={
    to: string;
    children: React.ReactNode;
    activeClass: string;
    className?: string
}


export function CustomNavLink({ to, children, activeClass, className, ...rest }: CustomNavLinkType) {
    let location = useLocation();
    let isActive = location.pathname === to;
    return (
        <Link
            to={to}
            className={isActive ? activeClass : className}
            {...rest}
        >
            {children}
        </Link>
    );
}
const NavBar = () => {

    return (
        <nav className={s.NavBar}>
        <span className={s.specButton}>
        <CustomNavLink className={s.link} activeClass={s.activeLink} to='/profile'>Profile</CustomNavLink>
         </span>
            <span className={s.specButton}><CustomNavLink className={s.link} activeClass={s.activeLink}  to='/dialogs'>Messages</CustomNavLink></span>
            <span className={s.specButton}> <CustomNavLink className={s.link} activeClass={s.activeLink}  to='/news'>News</CustomNavLink></span>
            <span className={s.specButton}><CustomNavLink  className={s.link} activeClass={s.activeLink} to='/music'>Music</CustomNavLink></span>
            <br/>
            <span className={s.specButton}> <CustomNavLink  className={s.link} activeClass={s.activeLink} to='/settings'>Settings</CustomNavLink></span>


        </nav>
    )
}
export default NavBar