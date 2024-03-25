import './Profile.module.css'
import s from "./Profile.module.css"
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost post={props.state.profilePage.post} addPost={props.addPost}/>
        </div>
    )
}
export default Profile