import React from "react";
import FrontImg from '../images/front-end-development.jpg'
import LokiFace from '../images/lokiface.png'
import {ProfileTextBlock} from "./ProfileTextBlock";
const MainContent = () => {
    return(
        <div className='MainContent'>
            <img className='FrontImg' src={FrontImg} alt={'1232'}/>
            <div className='ProfileWrapper'>
                <img className='LokiFace' src={LokiFace} alt={'123'}/>
                <ProfileTextBlock/>
            </div>
        </div>
    )
}
export default MainContent