import './index.css';
import state, {addMessage, addPost, newMessageText, newPostText, subscribe} from "./redux/state";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {

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

//Отрисовка всего дерева
renderEntireTree(state)

    // Вызов функции из state и вкладываем ей функцию для передачи ее в state
subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();