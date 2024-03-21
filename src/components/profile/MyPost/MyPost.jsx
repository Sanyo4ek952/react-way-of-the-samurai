import './MyPost.module.css'
import s from "./MyPost.module.css"
import Post from "./Post/Post";


const MyPost = () => {
    return (
        <div>
            <div>
                My posts
                <div className={s.addPost}>
                    <textarea className={s.textarea}></textarea>
                    <button className={s.button}>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post like="23"/>
                    <Post like="16"/>
                </div>
            </div>
        </div>
    )
}
export default MyPost