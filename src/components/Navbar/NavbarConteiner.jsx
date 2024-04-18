import './Navbarm.module.css'
import Navbar from "./Navbar";
import {connect} from "react-redux";

/*const NavbarConteiner = (props) => {
    return (
        <Navbar friends={props.store.getState().sidebar.friends}/>
    )
}*/
const mapStateToProps = (state) => {
    return {
        friends:state.sidebar.friends
    }
}
const NavbarConteiner = connect(mapStateToProps)(Navbar)
export default NavbarConteiner;
