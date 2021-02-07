import React from 'react'
import LikeButton from '../LikeButton'
import CommentButton from '../CommentButton/CommentButton'
function Post(props) {
    return (
        <div className="post-card">
            <div className="post-tag">{props.tag}</div>
            <div className="post-content">{props.content}</div>
            <div className="post-buttons">
                <div><LikeButton /></div>
                <div><CommentButton/></div>
            </div>
        </div>
    )
}

export default Post
