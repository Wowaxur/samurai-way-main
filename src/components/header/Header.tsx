import React from 'react'
import logoImg from '../images/logo.png'
const Header =  () => {
    return (<header className='Header'>
        <img className={'Logo'} src={logoImg}  alt={'123'}/>
        <a href={'#s'}>Home</a>
        <a href={'#s'}>News Feed</a>
        <a href={'#s'}>Messages</a>
        <style>
        </style>
    </header>)

}
export default Header
