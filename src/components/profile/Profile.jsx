import './Profile.module.css'
import s from "./Profile.module.css"
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div>
            <img
                src="https://avatars.mds.yandex.net/i?id=4285614d31acb7076416ae8c3a1003c130a3e0ca-6945470-images-thumbs&n=13"
                alt=""/>
            <div>
                ava + description
            </div>
            <MyPost/>
        </div>
    )
}
export default Profile