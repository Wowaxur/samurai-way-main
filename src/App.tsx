import './App.css';
import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/Pages/profile/Profile";
import Dialogs from "./components/Pages/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Pages/news/News";
import Music from "./components/Pages/music/Music";
import Settings from "./components/Pages/settings/Settings";

function App() {
    // debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




