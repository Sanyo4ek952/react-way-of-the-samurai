import './Dialogs.module.css'
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogName = (props) => {
    let navData = () => navData.isActive ? s.active : '';
    let path = `/dialogs/`
    return (
        <NavLink to={path + props.id} className={navData => navData.isActive ? s.active : s.dialogNameIteme}>
            {props.name}
        </NavLink>
    )
}
const Message = (props) => {
    return (<div key={props.id}  className={s.dialogChatMessage}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogName = props.state.dialogsPage.dialogNames.map((d, key)  => <DialogName name={d.name} id={d.id}/>)

    let dialogMessage = props.state.dialogsPage.dialogMessage.map((m, key) => <Message message={m.message} key={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogNames}>
                {dialogName}
            </div>
            <div className={s.dialogsChat}>
                {dialogMessage}
            </div>
        </div>
    )
}
export default Dialogs