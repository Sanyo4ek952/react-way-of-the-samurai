import './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost
                newText={props.newText}
                newPostText={props.newPostText}
                post={props.state.profilePage.post}
                addPost={props.addPost}/>
        </div>
    )
}
export default Profile