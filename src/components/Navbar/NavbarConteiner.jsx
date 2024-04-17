import './Navbarm.module.css'
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarConteiner = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return <Navbar friends={store.getState().sidebar.friends}/>
            }
            }
        </StoreContext.Consumer>

    )
}
export default NavbarConteiner;