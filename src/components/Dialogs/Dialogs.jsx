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
    return (<div className={s.dialogChatMessage}>
            {props.message}
        </div>
    )
}
const Dialogs = (props) => {
    const dialogName = props.dialogNames.map(d => <DialogName name={d.name} id={d.id}/>)
    const dialogMessage = props.dialogMessage.map(m => <Message message={m.message}/>)
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