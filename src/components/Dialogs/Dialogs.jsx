import './Dialogs.module.css'
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogName = (props) => {
    let navData = () => navData.isActive ? s.active : '';
    let path = `/dialogs/`
    return (<div className={s.dialogContact}>
            <NavLink to={path + props.id} className={navData => navData.isActive ? s.active : s.dialogNameIteme}>
                {props.name}
                <img
                    src='https://avatars.mds.yandex.net/i?id=89e584eb7b8760138facb9ba3d8b57d192ce1753-12301937-images-thumbs&n=13'
                    className={s.dialogLogo}></img>
            </NavLink>
        </div>
    )
}
const Message = (props) => {
    return (<div key={props.id} className={s.dialogChatMessage}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogName = props.state.dialogsPage.dialogNames.map((d, key) => <DialogName name={d.name} id={d.id}/>)
    let dialogMessage = props.state.dialogsPage.dialogMessage.map((m, key) => <Message message={m.message} key={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogContacts}>
                {dialogName}
            </div>
            <div className={s.dialogsChat}>
                {dialogMessage}
            </div>
        </div>
    )
}
export default Dialogs