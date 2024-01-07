import './App.css';
import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/Pages/profile/Profile";
import Dialogs from "./components/Pages/dialogs/Dialogs";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import News from "./components/Pages/news/News";
import Music from "./components/Pages/music/Music";
import Settings from "./components/Pages/settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/profile'}/> }/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;




