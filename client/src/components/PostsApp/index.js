import React from 'react'
import './index.css';
import PostList from './PostList'

function PostsApp() {

    const exampleList = [
        {
          tag:'Encouragement',
          content:'Everything will be okay!'
        },
        {
          tag:'Failure',
          content:'I fell asleep during lecture and the professor caught me'
        },
        {
          tag:'Encouragement',
          content:'Don\'t give up!'
        },
        {
          tag:'Encouragement',
          content:'I believe in you, random stranger reading this!'
        },
        {
          tag:'Failure',
          content:'I forgot my midterm was today!'
        },
        {
          tag:'Failure',
          content:'I left my mic on during Zoom class...'
        },
      ]
    

    return (
        <div className="post-body">
            <PostList posts={exampleList}/>
        </div>
    )
}

export default PostsApp
