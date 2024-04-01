import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">

                <Routes>
                    <Route path='/profile' element={<Profile
                        newText={props.newText}
                        newPostText={props.newPostText}
                        state={props.state}
                        addPost={props.addPost}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs
                        dialogNewMessage={props.dialogNewMessage}
                        newMessageText={props.newMessageText}
                        addMessage={props.addMessage}
                        state={props.state}/>}/>
                </Routes>
            </div>
        </div>
    );

}
export default App;
