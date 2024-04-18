import './Header.module.css'
import s from "./Header.module.css"
const Header = () => {
    return (
        <div className={s.header}>
            <img className={s.img}
                 src="https://avatars.mds.yandex.net/i?id=18d8e4062e14fdc5de498af2dd2577be9749a488-10814916-images-thumbs&n=13"
                 alt=""/>
        </div>
    )
}
export default Header