import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogNames = [
    {id: 1, name: 'Valera',},
    {id: 2, name: 'Kolya',},
    {id: 3, name: 'Oleg',},
    {id: 4, name: 'School',},
    {id: 5, name: 'Incubator',},
    {id: 6, name: 'Job',},
]
const dialogMessage = [
    {id: 1, message: 'Hellow',},
    {
        id: 2,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',

    },
    {id: 3, message: 'Lorem ipsum dolor sit.',},
]
const post = [
    {id: 1, name: 'Victor', text: 'Good code!', like: 24},
    {id: 2, name: 'Nikolay', text: 'Were you from?!', like: 9},
    {id: 3, name: 'Alexandr', text: 'Like you, bro', like: 12},

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App post={post} dialogNames={dialogNames} dialogMessage={dialogMessage}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
