import * as ReactBootstrap from 'react-bootstrap'
import "./Navbar.scss"
const Nav = () =>{
    return(
        <ReactBootstrap.Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <ReactBootstrap.Navbar.Brand href="/">APP NAME</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="/create_post">Add</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>

        </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
    )
}

export default Nav;