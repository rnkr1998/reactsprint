import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Nav from './Nav';
import {getFarmer} from '../../actions/farmer';
import { useEffect } from 'react';
import { useState } from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

import {
  
  Card,
  CardContent,

  CardHeader
} from "@material-ui/core/";
import ViewComplaint from '../../Service/Complaints/ViewComplaint';
import ViewOffer from '../../Service/Offers/ViewOffer';
import ViewAdvertaise from '../../Service/Posts/ViewAdvertaise';
import { makeStyles } from "@material-ui/core/styles";
import { ShopTwoRounded } from '@material-ui/icons';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

 
  root: {
    height: '100vh',
    flexGrow: 1
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function FarmerDash(props) {


  const [state,setState]=useState(false);
  const [item,setItem]=useState(false);


  
  const handlerOffer =(e) =>
  {
    e.preventDefault();
       setState(false);
       setItem(true);
       console.log(state);
       console.log(item);
      
  }
  const handlerPost =(e) =>
  {
    e.preventDefault();
      setItem(false);
       setState(true);
      
      
  }
  const classes = useStyles();  
  return (
 <div>
   
    
   
<Grid container component="main" className={classes.root} >    

      <Grid item xs={6} sm={8} md={5} component={Paper} elevation={6} square>
    
        <div className={classes.paper}>
       
       
        <Avatar style={{ height: '100px', width: '100px' }}>
        
            </Avatar>
  
          <Typography component="h1" variant="h5">
           Farmer Profile
          </Typography>
          <form className={classes.form} noValidate>

            <p>Farmer Id</p>
            <p>Farmer Name</p>
            <p>Farmer Age</p>
            <p>Farmer Number</p>
            <p>Farmer Address</p>
            <p>Farmer Email</p>
            
           
      
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              to='/user/farmer/addcomplaint'
            >
              Post Complaint
            </Button>

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handlerPost}
            >
              View Advertisement
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handlerOffer}
            >
              View Offer
            </Button>
            
            
            
          </form>
        </div>
     
        </Grid>
      
        <Grid item xs={3} sm={6} md={3}  container
          spacing={2}
        
          justify="flex-start"
          alignItems="flex-start">
            
</Grid>

        <Grid item xs={3} sm={6} md={3}  container        
          justify="flex-start"
          alignItems="flex-start">

         {
       state?

     <div>
       <h1>Advertaisements</h1>
     <ViewAdvertaise/>
     </div>
     :null
    }

     {
       item?
     <div>
       <h1>Offers</h1>
     <ViewOffer/>
      </div>
      :null
    }



        </Grid>
        </Grid>
        </div>
    
  );
}

const mapStateToProps  = (state) => ({farmer:state.Farmer})
export default connect(mapStateToProps, {getFarmer})(FarmerDash)