import './Dialogs.module.css'
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

const DialogName = (props) => {
    //Добавляем класс к активной кнопке
    let navData = () => navData.isActive ? s.active : '';
    let path = `/dialogs/`
    return (<div className={s.dialogContact}>
            <NavLink to={path + props.id} className={navData => navData.isActive ? s.active : s.dialogNameIteme}>
                {props.name}
                <img src={props.image} className={s.dialogLogo}></img>
            </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <span>{props.message}</span>

    )
}

const Dialogs = (props) => {
    let dialogName = props.state.dialogsPage.dialogNames.map(
        (d, key) => <DialogName name={d.name} image={d.image} id={d.id} key={d.id}/>)
    let dialogMessage = props.state.dialogsPage.dialogMessage.map(
        (m, key) => <Message key={m.id} message={m.message} id={m.id}/>)
    // Переменная будет содержать ссылку на какойнибудь элемент
    let newMessageElement = React.createRef();
    let addMessage = () => {
        // Обращаемся к этой ссылке и ссылаемся на html элемент и на его значение
        props.addMessage()
    }
    let updateMessageText = () => {
        let text = newMessageElement.current.value;
        props.newMessageText(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogContacts}>
                {dialogName}
            </div>
            <div className={s.dialogsChat}>
                <div id={props.id}
                     className={s.dialogChatMessage}>
                    {dialogMessage}
                </div>
                <textarea ref={newMessageElement}
                          className={s.createMessage}
                          onChange={updateMessageText}
                          value={props.dialogNewMessage}/>
                <button onClick={addMessage}>Отправить</button>
            </div>


        </div>
    )
}
export default Dialogs