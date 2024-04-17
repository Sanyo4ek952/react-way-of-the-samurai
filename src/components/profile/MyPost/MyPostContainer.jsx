import './MyPost.module.css'
import React from "react";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reduce";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";


const MyPostContainer = (props) => {

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
}
export default MyPostContainer