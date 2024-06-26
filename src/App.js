import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarConteiner from "./components/Navbar/NavbarConteiner";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarConteiner store={props.store} />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                </Routes>
            </div>
        </div>
    );

}
export default App;


