import './Dialogs.module.css'
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogNames}>
                <NavLink to='' className={s.dialogNameIteme}>
                    Valera
                </NavLink>
                <NavLink to='' className={s.dialogNameIteme}>
                    Kolya
                </NavLink>
                <NavLink to='' className={s.dialogNameIteme}>
                    Oleg
                </NavLink>
                <NavLink to='' className= {s.dialogNameIteme}>
                    School
                </NavLink>
                <NavLink to='' className={s.dialogNameIteme}>
                    Incubator
                </NavLink>
                <NavLink to='' className={s.dialogNameIteme}>
                    Job
                </NavLink>
            </div>
            <div className={s.dialogsChat}>
                <div className={s.dialogChatMessage}>
                    Hellow
                </div>
                <div className={s.dialogChatMessage}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <div className={s.dialogChatMessage}>
                    Lorem ipsum dolor sit.
                </div>
            </div>


        </div>
    )
}
export default Dialogs