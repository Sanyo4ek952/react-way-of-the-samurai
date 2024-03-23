import './ProfileInfo.module.css'
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <img className={s.image}
                 src="https://avatars.mds.yandex.net/i?id=4285614d31acb7076416ae8c3a1003c130a3e0ca-6945470-images-thumbs&n=13"
                 alt=""/>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo