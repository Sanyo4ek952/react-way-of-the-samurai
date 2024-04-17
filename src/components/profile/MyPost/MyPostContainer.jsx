import './MyPost.module.css'
import React from "react";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reduce";
import MyPost from "./MyPost";


const MyPostContainer = (props) => {
    let state =props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let changePostText = (text) => {
        let action = changePostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPost newText={state.profilePage.newText} posts={state.profilePage.post} changePostText={changePostText} addPost={addPost}/>
    )
}
export default MyPostContainer