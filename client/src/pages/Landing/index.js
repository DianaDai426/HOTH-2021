import React from 'react'
import styles from './Landing.module.scss'
//import PostList from '../../components/Posts/PostList'
//import Post from '../../components/Posts/index'
import PostsApp from '../../components/PostsApp'
import About from '../About'



export default(props) =>{
    // alert("hello");
    // console.log(props.posts);
    return <div className={styles.wrap}>
    
        {/*Landing Title */}
        <section className = {styles.landing}>
            <div className={styles.mainTitle}>You're not alone.</div>
            <a href="#posts" className={styles.showPosts}>See for yourself</a>
            <a href="#posts" className={styles.showPosts}>Contribute a post</a>

        </section>

        {/*about */}
        <section className={styles.about}>
            <a href="#about" style={{color:"white"}}>whoa, what is this about?</a>  

        </section>
       

        {/*Posts*/}
        <div id="posts"><PostsApp posts = {props.posts}/></div>

        {/*About*/}
        <div id="about"><About /></div>

        {/*Post 
         <section className={styles.post}>
            {PostList.map ((obj)=>{
                return(
                    <Post
                        data={obj}
                    />
               );
            })}
          
        </section>
        */}

        

    </div>
}
