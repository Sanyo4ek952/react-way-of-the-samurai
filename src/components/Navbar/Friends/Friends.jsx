import './Friends.module.css'
import s from "./Friends.module.css"
import {NavLink} from "react-router-dom";

let FriendsIteme = (props) => {
    let path = 'http://localhost:3000/dialogs/'
    return (
        <NavLink  to={`${path}${props.id}`} className={s.friendsIteme}>
            <img className={s.friendsItemeImage} src={props.image} alt=""/>
            <div className={s.friendsItemeName}>{props.name}</div>
        </NavLink>
    )
}
const Friends = (props) => {
    let friendsFun = props.friends.map((p, key) => <FriendsIteme  key={p.id} id={p.id} image={p.image} name={p.name}/>)
    return (
        <div>
            <h1 className={s.friends}>Friends</h1>
            <div className={s.friendsConteiner}>
                {friendsFun}
            </div>

        </div>
    )
}
export default Friends;