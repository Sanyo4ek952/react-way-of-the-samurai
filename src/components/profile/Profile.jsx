import './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostContainer from "./MyPost/MyPostContainer";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
        </div>
    )
}
export default Profile