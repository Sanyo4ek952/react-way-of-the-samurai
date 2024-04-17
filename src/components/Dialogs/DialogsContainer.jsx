import './Dialogs.module.css'
import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reduce";
import Dialogs from "./Dialogs";




const DialogsContainer = (props) => {
    let addMessage = () => {
        // Обращаемся к этой ссылке и ссылаемся на html элемент и на его значение
        props.store.dispatch(addMessageActionCreator())
    }
    let updateMessageText = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text))
    }
    return (
        <Dialogs dialogsPage={props.store.getState().dialogsPage}
                 updateMessageText={updateMessageText}
                 addMessage={addMessage}
                  />
    )
}
export default DialogsContainer