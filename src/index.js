import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogNames = [
    {name: 'Valera', id: 1,},
    {name: 'Kolya', id: 2,},
    {name: 'Oleg', id: 3,},
    {name: 'School', id: 4,},
    {name: 'Incubator', id: 5,},
    {name: 'Job', id: 6,},
]
let dialogMessage = [
    {message: 'Hellow', id: 1},
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        id: 2
    },
    {message: 'Lorem ipsum dolor sit.', id: 3},
]
const post = [
    {name: 'Victor', text: 'Good code!', like: 24},
    {name: 'Nikolay', text: 'Were you from?!', like: 9},
    {name: 'Alexandr', text: 'Like you, bro', like: 12},

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
