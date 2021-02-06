import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LikeButton from '../LikeButton/index'


const useStyles = makeStyles({
    wrap:{
        display:'flex',
        alignItems:'Center',
        justifyContent:'Center',
        margin:'20px',
    },
    root: {
      
      width:1500,
     

    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


export default ({data}) =>{
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
        <div className={classes.wrap}>
            
            <Card className={classes.root}>
                <CardContent>
                    {data.tag}
                </CardContent>

                <CardContent>
                    {data.content}
                </CardContent>

               

                <CardActions>
                    <LikeButton/>
                </CardActions>

                <CardActions>
                <Button size="small">Comment</Button>
                </CardActions>
            </Card>
      </div>
    );
}