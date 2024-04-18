import './Dialogs.module.css'
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reduce";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


/*const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let addMessage = () => {
                    // Обращаемся к этой ссылке и ссылаемся на html элемент и на его значение
                    store.dispatch(addMessageActionCreator())
                }
                let updateMessageText = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text))
                }
                return <Dialogs dialogsPage={store.getState().dialogsPage}
                                updateMessageText={updateMessageText}
                                addMessage={addMessage}/>
            }

            }
        </StoreContext.Consumer>
    )
}*/

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        updateMessageText: (text) => dispatch(updateMessageTextActionCreator(text)),
        addMessage: () => dispatch(addMessageActionCreator())
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer