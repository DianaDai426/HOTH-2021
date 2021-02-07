import React from 'react'
import styles from './About.module.scss'

export default() =>{
    return <div className={styles.wrap}>
        
        
        {/*Landing Title */}
        <section className = {styles.about}>
            <div className={styles.left}>
                Welcome to App Name.
            </div>
            <div className={styles.right}>
                It happens. You mess up, you feel awful about it, 
                and all you want is some sympathy, empathy, and 
                ice-cream. Or maybe today is just an off day, 
                and you just want to know that the universe doesn't 
                have a personal vendetta against you. 
                <br></br>
                <br></br>
                While we can't give you ice-cream, we can deliver 
                on the sympathy and empathy (from other people, at 
                least). Whether you need words of support or someone's 
                pain to relate to (or even a teeny, tiny bit of 
                schadenfreude), we have it all here. After all, life's 
                about those ups and downs. Why not share them all 
                together?
            </div>
        </section>


    </div>
}