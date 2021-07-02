import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import SupplierBG from './SupplierBG.jpg';
import {getFarmer} from '../../actions/farmer';
import { useEffect } from 'react';
import { useState } from 'react';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box'
import AddAdvertaise from '../../Service/Posts/AddAdvertaise';
import {
  
  Card,
  CardContent,

  CardHeader
} from "@material-ui/core/";
import ViewComplaint from '../../Service/Complaints/ViewComplaint';
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
    backgroundColor:' thistle',
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

function SupplierDash(props) {


  const [state,setState]=useState(false);
  const [item,setItem]=useState(false);
  const [post,setPost]=useState(false);
  const [data,setData]=useState(props.location.state.data);

 
  const handleAdd =(e) =>
  {
    e.preventDefault();
       setState(false);
       setItem(false);
       setPost(true);
      
  }
  const handleComplaint =(e) =>
  {
    e.preventDefault();
       setState(false);
       setPost(false);
       setItem(true);
       
      
  }
  const handlerPost =(e) =>
  {
    e.preventDefault();
      setItem(false);
      setPost(false);
       setState(true);
      
      
  }
  const classes = useStyles();  
  return (
 <div>
   
    
   
<Grid container component="main" className={classes.root} >    

      <Grid item xs={6} sm={8} md={4}  style={{backgroundColor: 'DarkCyan'
      }}
      component={Paper} elevation={6} square>
    
        <div className={classes.paper}>
       
       
        <Avatar style={{ height: '100px', width: '100px' }}>
        
            </Avatar>
  
          <Typography component="h1" variant="h5">
          Supplier Profile
          </Typography>
          <form className={classes.form} noValidate>

            <pre>  Supplier Id : {data.supplierId}</pre>
            <pre>  Supplier Name : {data.supplierName}</pre>
            <pre>  Supplier Number: {data.supplierNumber}</pre>
            <pre>  Supplier Email : {data.supplierEmail}</pre>
            
           
      
            <p align="center"><Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleAdd}
            >
              Post Advertaisement
            </Button></p>

            <p align="center"><Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handlerPost}
            >
              View Advertisement
            </Button></p>

            <p align="center"><Button
              type="submit"
             
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleComplaint}
            >
             Farmer Complaints
            </Button></p>
            
            
            
          </form>
        </div>
     
        </Grid>
{/*       
        <Grid item xs={3} sm={6} md={3}  container
          spacing={2}
        
          justify="flex-start"
          alignItems="flex-start">
            
</Grid> */}

        <Grid item xs={3} sm={6} md={8}  style={{backgroundImage: `url(${SupplierBG})`
      , backgroundRepeat: 'no-repeat',
      
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}   container        
          justify="flex-start"
          alignItems="flex-start">

         {
       state?

     <div>
      <Box display="flex" flexDirection="column" alignItems="stretch" padding={1} ><h1>Advertisements</h1></Box> 
     <ViewAdvertaise/>
     </div>
     :null
    }
    {post?

<div style={{backgroundColor:'white'}}>
 <Box display="flex" flexDirection="column" alignItems="stretch" padding={1} ></Box> 
<AddAdvertaise id={data.supplierId}/>
</div>
:null
}



     {
       item?
     <div>
       <h1>Complaints</h1>
     <ViewComplaint/>
      </div>
      :null
    }



        </Grid>
        </Grid>
        </div>
    
  );
}

const mapStateToProps  = (state) => ({farmer:state.Farmer})
export default connect(mapStateToProps, {getFarmer})(SupplierDash)