import React from 'react'
import s from './Header.module.css'
import logoImg from '../images/logo.png'
const Header =  () => {
    return (<header className={s.Header}>
        <img className= {s.Logo} src={logoImg}  alt={'123'}/>
        <a className={s.link} href={'#s'}>Home</a>
        <a className={s.link} href={'#s'}>News</a>
        <a className={s.link} href={'#s'}>Feed</a>
        <a className={s.link} href={'#s'}>Messages</a>
    </header>)

}
export default Header
