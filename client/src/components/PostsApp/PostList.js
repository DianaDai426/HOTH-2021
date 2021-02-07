import React from 'react'
import Post from './Post.js'

function PostList(props) {
    return (
        <div className="post-list">
            {props.posts.map((post, index) => {
                return (
                    <Post key={index} tag={post.tag} content={post.content}/>
                );
            })}
        </div>
    )
}

export default PostList
