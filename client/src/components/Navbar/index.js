import * as ReactBootstrap from 'react-bootstrap'
import "./Navbar.scss"
import React from "react";
import ReactDOM from "react-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Modal from '../Modal'
import SignInModal from '../SignIn/SignInModal'

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          tag: false,
          content: "",
        };
      }

      handleChange= (e) => {
        const target = e.target;
        //const tag = target.tag;
        const value = target.value;
    
        this.setState(prevState =>({
          modal: prevState.modal,
          tag: prevState.tag,
          content: value,
        }));
      }
    
      handleSubmit= (e) => {
        console.log(this.state.content);
        const target = e.target;
        //const tag = target.tag;
        const value = target.content;       
        const newPost ={
          tag: this.state.tag? "Encouragement": "Failure",
          content: this.state.content,
      }
        this.props.handleSubmit(newPost);
        this.modalClose();

      }
    
      modalOpen() {
        this.setState({ modal: true });
      }
    
      modalClose() {
        this.setState({
          content: "",
          name : "",
          modal: false
        });
      }

      handleClick_E = () => {
        this.setState(prevState =>({
          tag: 0,
          modal: prevState.modal,
          content: prevState.content,
        }))
        console.log(this.state.tag);
      }

      handleClick_F = () =>{
        this.setState(prevState =>({
          tag: 1,
          modal: prevState.modal,
          content: prevState.content,
        }))
        console.log(this.state.tag);
      }

      handleClick = () =>{
        this.setState(prevState =>({
          tag: !this.state.tag,
          modal: prevState.modal,
          content: prevState.content,
        }))        
      }


render(){
    return(
    <ReactBootstrap.Navbar fixed="top" bg="dark" expand="lg" variant="dark">
    <ReactBootstrap.Navbar.Brand href="/">APP NAME</ReactBootstrap.Navbar.Brand>

        <ReactBootstrap.Nav className="mr-auto">
        <ReactBootstrap.Nav.Link href="javascript:;" onClick={e => this.modalOpen(e)}>Add</ReactBootstrap.Nav.Link>

        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <h2>Enter your Encouragement/Failure</h2>
          <div className="form-group">
        <ReactBootstrap.Button onClick = {this.handleClick}>{this.state.tag==0? "Failure":"Encouragement"}</ReactBootstrap.Button>
            <input
              type="text"
              value={this.state.content}
              name="content"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />

          </div>
          <div className="form-group">
            <button onClick={e => this.handleSubmit(e)} type="button">
              Save
            </button>
          </div>
        </Modal>

        </ReactBootstrap.Nav>

        <ReactBootstrap.Nav className='SignIn'>
        <ReactBootstrap.Nav.Link href="javascript:;" ><SignInModal/></ReactBootstrap.Nav.Link>
        </ReactBootstrap.Nav>



    </ReactBootstrap.Navbar>
    )
}





}

export default Nav;