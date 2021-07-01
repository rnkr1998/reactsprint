import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link , NavLink} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import { useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {getFarmer} from '../../actions/farmer';
import {getSuppiler} from '../../actions/supplier';
import {getRetailer} from '../../actions/retailer';
import axios from 'axios';
import SupplierSignUp from './SupplierSignUp';
import { Redirect } from 'react-router';
import {Alert,AlertTitle} from '@material-ui/lab';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
    
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    
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

export default function SignInSide(props) {

  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
        const [data, setData] = useState();
        const [dashBoard, setDashBoard] = useState();

        const[error,setError]=useState('');
        

  const [Email, setEmail] = useState('');
  const [User, setUser] = useState('');
  const [Farmer,setFarmer] =useState('');
  const [Supplier,setSupplier]=useState('');
  const [Retailer,setRetailer]=useState('');




const handlerRest =() =>
{
  
  axios.get(`http://localhost:8080/api/farmer/getfarmer/all`)
  .then(res => {
    setFarmer(res.data);
     })

     axios.get(`http://localhost:8080/api/retailer/getretailer/all`, {
      headers: {"Access-Control-Allow-Origin": "*"},
      })
     .then(res3 => {
       setRetailer(res3.data);
     })



     let res2=axios.get(`http://localhost:8080/api/supplier/getsupplier/all`)
     .then(res2 => {
       setSupplier(res2.data);
     })

}


 
   


  const onhangeHandler =(e) =>
  {
    setEmail(e.target.value);

  }

 const handleSelect =(e) =>
 {
   setUser(e.target.value);
   document.getElementById('select').value=e.target.value;
   handlerRest();
 }

  const handlerSubmit = (e) =>
  {
    e.preventDefault();     


   if(User=="Farmer")
   {
    
    for(var k in Farmer) {
      if(Email===Farmer[k].farmerEmail)
      {
        setRedirect(true);
            setData(Farmer[k]);
            setDashBoard('Farmer');
      }
      else
      {
        setError('USERNAME OR PASSWORD IS INCORRECT');
      }

   }
     
    }
   else if(User=="Retailer")
   {
    for(var k in Retailer) {
      if(Email===Retailer[k].retailerEmail)
      {
        setRedirect(true);
        setData(Retailer[k]);
        setDashBoard('Retailer');
      }
      else
      {
        setError('USERNAME OR PASSWORD IS INCORRECT');
      }

   }
  }
   else if(User=="Supplier")
   {
    for(var k in Supplier) {
      if(Email===Supplier[k].supplierEmail)
      {
        setRedirect(true);
        setData(Supplier[k]);
        setDashBoard('Supplier');
      }
      else
      {
        setError('USERNAME OR PASSWORD IS INCORRECT');
      }
   }
   }
  }

  if (redirect)
  return <Redirect to={{ pathname: '/Registration', data: { data } , user:{dashBoard}}} />

  return (
    <>
   
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        {error &&  <Alert severity="error">
  <AlertTitle>{error}</AlertTitle>
  <p className='error'></p>
</Alert>}
       
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handlerSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="Email"
              autoComplete="email"
              autoFocus
              onChange={onhangeHandler}
            
            />
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

            <TextField  variant="outlined"  fullWidth id="select" label="Login as"  select onChange={handleSelect}>
            <MenuItem value="Farmer">Farmer</MenuItem>
             <MenuItem value="Retailer">Retailer</MenuItem>
             <MenuItem value="Supplier">Supplier</MenuItem>
              </TextField>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
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
              <Grid item>
              <NavLink variant="button" color="textPrimary" exact to="/user/registration" className={classes.link}>
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </>
 
  );
}