import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar, Toolbar, IconButton, Typography} from "@material-ui/core"
import Button from '@material-ui/core/Button'
import {MenuIcon} from "@material-ui/icons/Menu"

const Navbar = () =>{
    return(
    <AppBar position="static">
    <Toolbar>
        <Typography className = {"title"} variant="h6">
        Title of the App
        </Typography>
        <Button color="inherit">Add</Button>
    </Toolbar>
    </AppBar>
    );
}

export default Navbar