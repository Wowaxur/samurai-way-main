import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {addPost} from "./redux/state";
import React from "react";


export let rerenderEntireTree = (state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} AddPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}