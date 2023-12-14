import './App.css';
import React from "react";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import NavBar from "./components/navBar/NavBar";

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




