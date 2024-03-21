import './Navbarm.module.css'
import s from "./Navbarm.module.css"
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className={s.navBar}>
            <Link className={s.iteme} to='/profile'>Profile</Link>
            <Link className={`${s.iteme} ${s.active}`} to='/dialogs'>Messages</Link>
            <Link className={s.iteme} to='/news'>News</Link>
            <Link className={s.iteme} to='/music'>Music</Link>
            <Link className={s.iteme} to='/settings'>Settings</Link>
        </div>
    )
}
export default Navbar