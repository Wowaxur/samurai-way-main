import './App.css';
import React from "react";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";


function App() {
    // debugger
    return (

        <div className='app-wrapper'>
            <Header/>
            <NavBar ></NavBar>
            <MainContent/>
        </div>
    );
}

export default App;



const NavBar = () => {
    return (
        <nav className='NavBar'>
        <span><a href='#'>Profile</a></span>
        <span><a href='#'>Messages</a></span>
            <span><a href='#'>News</a></span>
            <span><a href='#'>Music</a></span>
            <br/>
            <span><a href='#'>Settings</a></span>


        </nav>
    )
}
