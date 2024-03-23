import './Dialogs.module.css'
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogName = (props) => {
    let navData = ()=>navData.isActive?s.active:'';
    let path = `/dialogs/`
    return (
        <NavLink to={path + props.id} className= {navData => navData.isActive ? s.active : s.dialogNameIteme }>
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
const Dialogs = () => {
    let dialogNames = [
        {name: 'Valera',id:'1',},
        {name: 'Kolya',id:'2',},
        {name: 'Oleg',id:'3',},
        {name: 'School',id:'4',},
        {name: 'Incubator',id:'5',},
        {name: 'Job',id:'6',},
    ]
    let message = [
        {message:'Hellow'},
        {message:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {message:'Lorem ipsum dolor sit.'},
    ]
    const dialogName = dialogNames.map(d=><DialogName name={d.name} id={d.id} />)
    const dialogMessage = message.map(m=><Message message={m.message} />)
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