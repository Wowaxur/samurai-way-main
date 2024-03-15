import React from "react";
import s from './NavBar.module.css'
import {useLocation} from "react-router-dom";
import {Link } from 'react-router-dom';
import {StateType} from "../../redux/state";
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
const NavBar = (props: {state: StateType}) => {

    return (
        <nav className={s.NavBar}>
        <span className={s.specButton}>
        <CustomNavLink className={s.link} activeClass={s.activeLink} to='/profile'>Profile</CustomNavLink>
         </span>
            <span className={s.specButton}>
                <CustomNavLink className={s.link} activeClass={s.activeLink}  to='/dialogs'>Messages</CustomNavLink>
            </span>
            <span className={s.specButton}>
                <CustomNavLink className={s.link} activeClass={s.activeLink}  to='/news'>News</CustomNavLink>
            </span>
            <span className={s.specButton}>
                <CustomNavLink  className={s.link} activeClass={s.activeLink} to='/music'>Music</CustomNavLink>
            </span>
            <br/>
            <span className={s.specButton}>
                <CustomNavLink  className={s.link} activeClass={s.activeLink} to='/settings'>Settings</CustomNavLink>
            </span>
            <div className={s.FridendWrapper}>
                {props.state.dialogsPage.dialogs.map(fr => <div key={fr.id} className={s.friendList}>
                    <span className={s.FriendName}>{fr.name}</span>
                </div>)}
            </div>

        </nav>
    )
}
export default NavBar