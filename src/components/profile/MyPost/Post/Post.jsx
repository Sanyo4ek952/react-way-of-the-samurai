import './Post.module.css'
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.content}>
                <img className={s.logo}
                     src="https://avatars.mds.yandex.net/i?id=8ee7872d2d82e467325b16c568c5e6b91346a12b-7065890-images-thumbs&n=13"
                     alt=""/>
                <div className={s.description}>
                    <div className={s.name}>
                        {props.postName}
                    </div>
                    <div className={s.text}>{props.postText}</div>
                </div>
            </div>
            <span>like {props.postLike}</span>
        </div>
    )
}
export default Post