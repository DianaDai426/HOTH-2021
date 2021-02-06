import React from 'react'
import styles from './About.module.scss'

export default() =>{
    return <div className={styles.wrap}>
        
        
        {/*Landing Title */}
        <section className = {styles.about}>
            <div className={styles.left}>
                Welcome to Title of App.
            </div>
            <div className={styles.right}>
                
            Explain the point of this app here in a way that ma
            kes us sound really cool. And also makes the app sound rea
            lly cool and welcoming. Ye.
            </div>
        </section>


    </div>
}