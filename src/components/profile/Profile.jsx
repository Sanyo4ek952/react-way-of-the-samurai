import './Profile.module.css'
import s from "./Profile.module.css"
const Profile = () => {
    return (
        <div className={s.content}>
            <img
                src="https://avatars.mds.yandex.net/i?id=4285614d31acb7076416ae8c3a1003c130a3e0ca-6945470-images-thumbs&n=13"
                alt=""/>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 1
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile