import './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost dispatch={props.dispatch} state={props.state}/>
        </div>
    )
}
export default Profile