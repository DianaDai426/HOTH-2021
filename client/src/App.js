import React from 'react'
import styles from './App.module.scss'
import Landing from './pages/Landing'
import { Link, Route, withRouter} from 'react-router-dom'
import About from './pages/About'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <div className="app">

      {/*header*/}
      <header className={styles.header}>
       
        <div className={styles.top}>

          {/*title */}
          <Link to="/" style={{textDecoration:'none'}}><div className={styles.title}>
            Some Title
          </div></Link>

          {/*create a post */}
          <div className={styles.createPost}>
            <Link to="/create_post" style={{textDecoration:'none'}}><div className={styles.plus}> + </div></Link>
          </div>


        </div>

      </header>
        

      {/*content */}
      <section className={styles.content}>
          <Route path = '/' exact component = {Landing}/>
          <Route path = '/create_post' exact component = {CreatePost}/>
          <Route path = '/about' exact component = {About}/>

        </section>
     

         {/*fotter */}
      <footer className={styles.footer}>
        <b>HOTH 2021 Dolphin :)</b>
      </footer>
        
        
    </div>
  )
}

export default withRouter(App)