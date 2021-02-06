import React from 'react'
import styles from './Landing.module.scss'
import { Link, Route, withRouter} from 'react-router-dom'

export default() =>{
    return <div className={styles.wrap}>
        
        
        {/*Landing Title */}
        <section className = {styles.landing}>
            <div className={styles.mainTitle}>You're not alone.</div>
            <div className={styles.showPosts}>See for yourself</div>
        </section>

        {/*about */}
        <section className={styles.about}>
        <Link  to="/about">  whoa, what is this about?</Link>  
           
        </section>
        
        {/*Post */}
         <section className={styles.post}>
            somepost
           
        </section>


        

    </div>
}
