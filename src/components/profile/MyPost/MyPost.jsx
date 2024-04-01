import './MyPost.module.css'
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import React from "react";


const MyPost = (props) => {
    let post = props.post.map((p, key) => <Post
        key={p.id} postText={p.text} postLike={p.like} postName={p.name}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }
    let changePostText = () => {
        let text = newPostElement.current.value;
        props.newPostText(text)
    }
    return (
        <div>
            <div>
                My posts
                <div className={s.addPost}>
                    <textarea
                        ref={newPostElement}
                        className={s.textarea}
                        onChange={changePostText}
                        value={props.newText}/>
                    <button onClick={addPost}
                            className={s.button}>
                        Add post
                    </button>
                </div>
                <div className={s.posts}>
                    {post}
                </div>
            </div>
        </div>
    )
}
export default MyPost