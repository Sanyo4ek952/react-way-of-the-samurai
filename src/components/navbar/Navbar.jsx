import './Navbarm.module.css'
import s from "./Navbarm.module.css"

const Navbar = () => {
    return (
        <div className={s.navBar}>
            <a className={s.iteme} href='#'>Profile</a>
            <a className={`${s.iteme} ${s.active}`} href='#'>Messages</a>
            <a className={s.iteme} href='#'>News</a>
            <a className={s.iteme} href='#'>Music</a>
            <a className={s.iteme} href='#'>Settings</a>
        </div>
    )
}
export default Navbar