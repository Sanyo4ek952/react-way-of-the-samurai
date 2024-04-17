import './MyPost.module.css'
import s from "./MyPost.module.css"
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reduce";


const MyPost = (props) => {
    let post = props.posts.map((p, key) => <Post
        key={p.id} postText={p.text} postLike={p.like} postName={p.name}/>)
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }
    let changePostText = () => {
        let text = newPostElement.current.value;
        props.changePostText()
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
                    <button onClick={onAddPost}
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