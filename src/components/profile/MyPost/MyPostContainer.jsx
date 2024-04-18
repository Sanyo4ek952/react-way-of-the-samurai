import './MyPost.module.css'
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reduce";
import MyPost from "./MyPost";
import {connect} from "react-redux";

/*const MyPostContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store)=>{
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let changePostText = (text) => {
                    let action = changePostTextActionCreator(text)
                    store.dispatch(action)
                }
                return(
                    <MyPost newText={state.profilePage.newText}
                            posts={state.profilePage.post}
                            changePostText={changePostText}
                            addPost={addPost}/>
                )
            }}

        </StoreContext.Consumer>
    )
}*/
const mapStateToProps = (state)=>{
    return{
        newText:state.profilePage.newText,
        posts:state.profilePage.post
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addPost:()=>{
            dispatch(addPostActionCreator())
        },
        changePostText:(text)=>{
            let action = changePostTextActionCreator(text)
            dispatch(action)
        }
    }
}
const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)
export default MyPostContainer