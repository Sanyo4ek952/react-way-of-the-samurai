import './index.css';
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App newText={store._state.profilePage.newText}
                     dialogNewMessage={store._state.dialogsPage.dialogNewMessage}
                     state={state}
                     addPost={store.addPost.bind(store)}
                     newPostText={store.newPostText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     newMessageText={store.newMessageText.bind(store)}
                />

            </BrowserRouter>
        </React.StrictMode>
    );

}

//Отрисовка всего дерева
renderEntireTree(store.getState())

// Вызов функции из state и вкладываем ей функцию для передачи ее в state
store.subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();