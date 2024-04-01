import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, newMessageText, newPostText,} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App newText={
                    state.profilePage.newText}
                     dialogNewMessage={state.dialogsPage.dialogNewMessage}
                     newPostText={newPostText}
                     newMessageText={newMessageText}
                     state={state}
                     addMessage={addMessage}
                     addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>
    );

}
