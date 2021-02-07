import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
  root: {
    //color: theme.palette.getContrastText(purple[500]),
    color:'black',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontSize:14,
    opacity:0.6,
    '&:hover': {
      backgroundColor: 'transparent',
      opacity:0.7,
      boxShadow: 'none',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
}));


export default function SignInButton() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin}>
        <b>Register</b>
      </ColorButton>
    </div>
  );
}