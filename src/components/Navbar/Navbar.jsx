import './Navbarm.module.css'
import s from "./Navbarm.module.css"
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <div className={s.navBar}>
            <NavLink className={navData => navData.isActive ? s.active : s.iteme} to='/profile'>Profile</NavLink>
            <NavLink className={navData => navData.isActive ? s.active : s.iteme} to='/dialogs'>Messages</NavLink>
            <NavLink className={navData => navData.isActive ? s.active : s.iteme} to='/news'>News</NavLink>
            <NavLink className={navData => navData.isActive ? s.active : s.iteme} to='/music'>Music</NavLink>
            <NavLink className={navData => navData.isActive ? s.active : s.iteme} to='/settings'>Settings</NavLink>
            <div>

                <Friends friends={props.friends}/>
            </div>
        </div>
    )
}
export default Navbar;