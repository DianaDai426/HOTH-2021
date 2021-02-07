import * as ReactBootstrap from 'react-bootstrap'
import "./Navbar.scss"
import React from "react";
import ReactDOM from "react-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Modal from '../Modal'

//import "./styles.css";
const radios = [
  { name: 'Encouragement', value: '1' },
  { name: 'Failure', value: '2' },]


class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          tag: 0,
          content: "",
          like: 0,
        };
      }

      handleChange= (e) => {
        const target = e.target;
        //const tag = target.tag;
        const value = target.content;
    
        this.setState(prevState =>({
          modal: prevState.modal,
          tag: prevState.tag,
          content: value,
          //like: prevState.like,
        }));
      }
    
      handleSubmit= (e) => {
        console.log(e);
        const target = e.target;
        //const tag = target.tag;
        const value = target.content;        
        //this.setState(prevState =>({ radioValue: true, content: ""}));

        const newPost ={
          tag: 0,
          content: value,
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

      // handleClick_E = () => {
      //   this.setState(prevState =>({
      //     radioValue: true,
      //     modal: prevState.modal,
      //     content: prevState.content,
      //     like: prevState.like,
      //   }))
      // }
      // handleClick_F = () =>{
      //   this.setState(prevState =>({
      //     tag: false,
      //     modal: prevState.modal,
      //     content: prevState.content,
      //     like: prevState.like,
      //   }))
      // }



render(){
    return(
    <ReactBootstrap.Navbar fixed="top" bg="dark" expand="lg" variant="dark">
    <ReactBootstrap.Navbar.Brand href="/">APP NAME</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Nav className="mr-auto">
        <ReactBootstrap.Nav.Link href="javascript:;" onClick={e => this.modalOpen(e)}>Add</ReactBootstrap.Nav.Link>

        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <h2>Enter your Encouragement/Failure</h2>
          <div className="form-group">

      
          <ReactBootstrap.ButtonGroup aria-label="Basic example">
                <ReactBootstrap.Button onClick={this.handleClick_E}>Encouragement</ReactBootstrap.Button>
                <ReactBootstrap.Button onClick={this.handleClick_F} >Failure</ReactBootstrap.Button>
            </ReactBootstrap.ButtonGroup> 

          {/* <ReactBootstrap.ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ReactBootstrap.ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={this.radioValue}
                checked={this.radioValue === radio.value}
                onChange={(e) => this.setState(prevState=>{(radioValue: e.currentTarget.value)})
                }
              >
                {radio.name}
              </ReactBootstrap.ToggleButton>
            ))}






            {/* <label>Enter Name:</label> */}
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

    </ReactBootstrap.Navbar>
    )
}





}

export default Nav;