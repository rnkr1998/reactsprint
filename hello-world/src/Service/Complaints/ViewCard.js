import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ErrorIcon from '@material-ui/icons/Error';
import Box from '@material-ui/core/Box';
import pimg from './pimg.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

const ViewCard=({complaint})=> {
  const classes = useStyles();

  return (
    
    
      <Paper className={classes.paper} style={{ backgroundColor: '#ebe7e6',margin:'10px'}}>
     
                    
        <Grid container spacing={2} style={{ backgroundColor: '#f5f1f0'}}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={pimg} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6" style={{fontWeight:'bold'}}>
                 {complaint.complaintType}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {complaint.complaintMessage}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID:{complaint.complaintId}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                 To:{complaint.complaintOn}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"><ErrorIcon style={{color:'red'}}/></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>


  
  );
}

export default ViewCard;
