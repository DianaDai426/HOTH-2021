import React from 'react'
import styles from './Landing.module.scss'
import { Link, Route, withRouter} from 'react-router-dom'
//import PostList from '../../components/Posts/PostList'
//import Post from '../../components/Posts/index'
import PostsApp from '../../components/PostsApp'
import About from '../About'

export default() =>{
    return <div className={styles.wrap}>
    
        {/*Landing Title */}
        <section className = {styles.landing}>
            <div className={styles.mainTitle}>You're not alone.</div>
            <a href="#posts" className={styles.showPosts}>See for yourself</a>

        </section>

        {/*about */}
        <section className={styles.about}>
            <a href="#about" style={{color:"white"}}>whoa, what is this about?</a>  

        </section>


        {/*Posts*/}
        <div id="posts"><PostsApp /></div>

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
