import './App.css';
import React from "react";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/Pages/profile/Profile";
import Dialogs from "./components/Pages/dialogs/Dialogs";
import {Route, Routes, Navigate } from "react-router-dom";
import News from "./components/Pages/news/News";
import Music from "./components/Pages/music/Music";
import Settings from "./components/Pages/settings/Settings";
import Error404 from "./components/Pages/Error404/Error404";
import {StateType, StoreType} from "./redux/state";

type AppProps = {
    state: StateType,
    dispatch:(postMessage: string) => void;
    store: StoreType
}


function App(props: AppProps) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/profile'}/> }/>
                        <Route path='/profile' element={<Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs store={props.store} state={props.state.dialogsPage}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='*' element={<Error404 />}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;




