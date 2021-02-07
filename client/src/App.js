import React from 'react'
import styles from './App.module.scss'
import Landing from './pages/Landing'
import { Link, Route, withRouter} from 'react-router-dom'
import About from './pages/About'
import CreatePost from './pages/CreatePost'
import Nav from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import SignInModal from './components/SignIn/SignInModal'
import SignUpModal from './components/SignUp/SignUpModal'

const exampleList = [
  {
    tag:'Encouragement',
    content:'I love ucla!'
  },
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
class App extends React.Component{
  constructor(props){        
    super(props);
    this.state = {
      posts: exampleList,
    };
  }

  handleSubmit = (newPost)=>{
    this.setState(prevState =>({
      posts: [...prevState.posts, newPost]
    }))
    console.log(newPost)
  }


  render(){
    return (
      <div className="app">
      {/* Navbar */}
      <Nav handleSubmit = {this.handleSubmit}/>

    {/* <section className={styles.content}>
      <Route path = '/' exact component = {Landing}/>
      <Route path = '/create_post' exact component = {CreatePost}/>
      <Route path = '/about' exact component = {About}/>
    </section> */}


      {/*header
      <header className={styles.header}>
       
        <div className={styles.top}>

          {/*title 
          <Link to="/" style={{textDecoration:'none'}}><div className={styles.title}>
            Some Title
          </div></Link>

          {/*create a post 
          <div className={styles.createPost}>
            <Link to="/create_post" style={{textDecoration:'none'}}><div className={styles.plus}> + </div></Link>
          </div>

        {/*header*/}
        
        {/* <header className={styles.header}>
          <div className={styles.top}> */}

            {/*title */}
            {/* <Link to="/" style={{textDecoration:'none'}}><div className={styles.title}>
              Some Title
            </div></Link> */}

            {/*create a post */}
            {/* <div className={styles.createPost}>
              <Link to="/create_post" style={{textDecoration:'none'}}><div className={styles.plus}> + </div></Link>
            </div> */}


          {/* </div> */}

        {/* // </header> */}
          

        {/*content */}
        <section className={styles.content}>
            <Route path = '/' 
            exact component={() => <Landing posts={this.state.posts}/>}/>
            <Route path = '/create_post' exact component = {CreatePost}/>
            <Route path = '/about' exact component = {About}/>

          </section>

         

          {/*footer */}
        <footer className={styles.footer}>
          <b>HOTH 2021 Dolphin :)</b>
        </footer>
          
          
      </div>
    )    
  }

}

export default withRouter(App)