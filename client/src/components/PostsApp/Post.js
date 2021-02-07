import React from 'react'
import LikeButton from '../LikeButton'

function Post(props) {
    return (
        <div className="post-card">
            <div className="post-tag">{props.tag}</div>
            <div className="post-content">{props.content}</div>
            <LikeButton />
        </div>
    )
}

export default Post
