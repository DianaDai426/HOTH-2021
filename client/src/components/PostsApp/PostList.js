import React from 'react'
import Post from './Post.js'

function PostList(props) {
    const allPosts = props.posts;
    // console.log("print all posts");
    // console.log(allPosts);
    return (
        <div className="post-list">
        {allPosts.map((post, index) => (
            <Post key={index} tag={post.tag} content={post.content}/>            
        ))      
        }
        </div>
    )
}

export default PostList
