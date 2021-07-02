import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from 'react-router';
import {Alert,AlertTitle} from '@material-ui/lab';
import {connect} from 'react-redux'
import {getFarmer} from '../../actions/farmer'
import {getRetailer} from '../../actions/retailer'
import {getSupplier} from '../../actions/supplier'
import { bindActionCreators, compose } from 'redux';
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router';



const styles = theme => ({
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
});




class Login extends React.Component 
{



constructor(props)
{
  super(props);
  this.props.getFarmer();
  this.props.getRetailer();
  this.props.getSupplier();
  this.state=
  {
  
    error:'',
    email:'',
    user:'',
    farmer:'',
    supplier:'',
    retailer:'',
    message:''

  }
}
  





  onhangeHandler =(e) =>
  {

    this.setState({email:e.target.value});
  }

 handleSelect =(e) =>
 {
 
  this.setState({farmer:this.props.farmer});
  this.setState({retailer:this.props.retailer});
  this.setState({supplier:this.props.supplier});

   this.setState({user:e.target.value});
   document.getElementById('select').value=e.target.value;

  

 }





  handlerSubmit = (e) =>
  {
    e.preventDefault();     

   if(this.state.user=="Farmer")
  {
   
     for(var k in this.state.farmer) {
   
      if(this.state.email==this.state.farmer[k].farmerEmail)
      {
        this.setState({message:"Login Succesfully!"})
      this.props.history.push({
        pathname: '/user/farmer',
        state: {data:this.state.farmer[k] }
      })

      }
      else
     {
       this.setState({error:'USERNAME OR PASSWORD IS INCORRECT'});
     }
      }
    }
    else if(this.state.user=='Retailer')
    {
      console.log(this.state.retailer);
     for(var k in this.state.retailer) {
       if(this.state.email===this.state.retailer[k].retailerEmail)
       {
        this.setState({message:"Login Succesfully!"})
       this.props.history.push({
        pathname: '/user/retailer',
        state: {data:this.state.retailer[k] }
      })
  
       }
      else
      {
        this.setState({error:'USERNAME OR PASSWORD IS INCORRECT'});
       }

    }
   }
    else if(this.state.user=="Supplier")
    {
    for(var k in this.state.supplier) {
       if(this.state.email===this.state.supplier[k].supplierEmail)
       {
        this.setState({message:"Login Succesfully!"})
        this.props.history.push({
          pathname: '/user/supplier',
          state: {data:this.state.supplier[k] }
        })
    
     
     }
       else
       {
         this.setState({error:'USERNAME OR PASSWORD IS INCORRECT'});
       }
    }
   }
  }





render(){
  const{
    email,
    password,
    
  } = this.props;
  const { classes } = this.props;
  return(
<>
   
   <Grid container component="main" className={classes.root} style={{backgroundColor:'#b5a491'}} >
     <CssBaseline />
     <Grid item xs={false} sm={4} md={7} className={classes.image} style={{backgroundColor:'#b5a491'}}/>
     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
       <div className={classes.paper}>
       {this.state.error &&  <Alert severity="error">
 <AlertTitle>{this.state.error}</AlertTitle>
 <p className='error'></p>
</Alert>}
      
         <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
           Sign in
         </Typography>
         <form className={classes.form} onSubmit={this.handlerSubmit}>
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
             onChange={this.onhangeHandler}
             inputProps={{
               pattern: "^(.+)@(.+)$",
               title: "Please enter valid email address",
             }}
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
             inputProps={{
               pattern: "[a-zA-Z0-9#@!&$%]{8,}",
               title: "Enter atleast 8 characters with single capital letter,small letter,number,symbols ",
             }}
           />

           <TextField   required  variant="outlined"  fullWidth id="select" label="Login as"  select onChange={this.handleSelect}>
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
        
           <Box mt={5}>
           {this.state.message &&  <Alert severity="success"><AlertTitle>{this.state.message}</AlertTitle></Alert>}
           </Box>
         </form>
       </div>
     </Grid>
   </Grid>
   </>

  );
}


 
}

const mapStateToProps  = (state) => ({farmer:state.Farmer,
retailer:state.Retailer,
supplier:state.Supplier})

const ShowTheLocationWithRouter = withRouter(Login);

export default compose(
  withStyles(styles, {
    name: 'Login',
  },{ withTheme: true }),
connect(mapStateToProps,{getFarmer,getSupplier,getRetailer}),
)(ShowTheLocationWithRouter);

