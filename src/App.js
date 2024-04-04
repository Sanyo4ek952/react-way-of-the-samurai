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
                    <Route path='/profile' element={<Profile state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dispatch={props.dispatch} state={props.state}/>}/>
                </Routes>
            </div>
        </div>
    );

}
export default App;
