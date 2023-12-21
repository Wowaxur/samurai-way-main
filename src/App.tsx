import './App.css';
import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

function App() {
    // debugger
    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                 <Profile/>
               {/* <Dialogs/>*/}
            </div>
        </div>
    );
}

export default App;




