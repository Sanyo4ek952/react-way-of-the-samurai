import './MyPost.module.css'
import s from "./MyPost.module.css"
import Post from "./Post/Post";


const MyPost = (props) => {
    let post = props.post.map(p => <Post postText={p.text} postLike={p.like} postName={p.name}/>)
    return (
        <div>
            <div>
                My posts
                <div className={s.addPost}>
                    <textarea className={s.textarea}></textarea>
                    <button className={s.button}>Add post</button>
                </div>
                <div className={s.posts}>
                    {post}
                </div>
            </div>
        </div>
    )
}
export default MyPost