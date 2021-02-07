import * as ReactBootstrap from 'react-bootstrap'
import "./Navbar.scss"
import React from "react";
import ReactDOM from "react-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Modal from '../Modal'

//import "./styles.css";
class Nav extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          modal: false,
          name: "",
          modalInputName: ""
        };
      }
      handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(e) {
        this.setState({ name: this.state.modalInputName });
        this.modalClose();
      }
    
      modalOpen() {
          alert("clicked");
        this.setState({ modal: true });
      }
    
      modalClose() {
        this.setState({
          modalInputName: "",
          modal: false
        });
      }

render(){
    return(
    <ReactBootstrap.Navbar fixed="top" bg="dark" expand="lg" variant="dark">
    <ReactBootstrap.Navbar.Brand href="/">APP NAME</ReactBootstrap.Navbar.Brand>
    <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootstrap.Nav className="mr-auto">
        <ReactBootstrap.Nav.Link href="javascript:;" onClick={e => this.modalOpen(e)}>Add</ReactBootstrap.Nav.Link>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <h2>Enter your Encouragement/Failure</h2>
          <div className="form-group">
          <ReactBootstrap.ButtonGroup aria-label="Basic example">
                <ReactBootstrap.Button >Encouragement</ReactBootstrap.Button>
                <ReactBootstrap.Button >Failure</ReactBootstrap.Button>
            </ReactBootstrap.ButtonGroup>
            {/* <label>Enter Name:</label> */}
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
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

    </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
    )
}





}

export default Nav;