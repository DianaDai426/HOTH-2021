import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignUpModal from '../SignUp/SignUpModal'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    backgroundColor:'#008891',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'#0F3057',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

          {/*The Lock Button */}
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        {/*Sign In Title */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>


        <form className={classes.form} noValidate>

            {/*First Input Email Box */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          {/*Second Input Password Box */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          {/*Remember Me */}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          {/*Sign In Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Sign In
          </Button>



          <Grid container>

              {/*Forgot password Link */}
            <Grid item xs>    
              <Link href="#" variant="body2">
                {/* Forgot password? */}
              </Link>
            </Grid>

                {/*Sign Up Link*/}
            <Grid item>
              <SignUpModal/>
              {/*
              <Link to="/register" variant="body2" >
               {"Don't have an account? Sign Up"}
                
              </Link>*/}
            </Grid>
          </Grid>
        </form>
      </div>
     

      
    </Container>

    
  );
}