import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link , NavLink} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useState} from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <button color="inherit" href="https://material-ui.com/">
        Your Website
      </button>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FarmerSignup(props) {
  const [state, setState] = useState({ fullName: "", Email: "" ,Password:"",
  Age:"",Phone:"",Address:""
});

const{
  fullName,
  Age,
  Phone,
  Address,
  Email,
  Password,
  
} = state;



  const handleChange = e => {
      const { name, value } = e.target;
      setState(prevState => ({
          ...prevState,
          [name]: value
      }));
 
  };
  

  const handleSubmit = e => {
    e.preventDefault();
       
      props.onSubmitFarmer(
          {
            farmerName: state.fullName,
            farmerEmail:state.Email,
            farmerAge: state.Age,
            farmerNumber: state.Phone,
            farmerAddress:state.Address
              
              
          }
      )
  
  }







  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Farmer Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                onChange={handleChange}
                autoFocus
                inputProps={{
                  pattern: "^[A-Za-z ]\\w{5,29}$",
                  title: "Please enter Full name",
                }}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="Email"
                onChange={handleChange}
                autoComplete="email"
                inputProps={{
                  pattern: "^(.+)@(.+)$",
                  title: "Please enter valid email address",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
                inputProps={{
                  pattern: "[a-zA-Z0-9#@!&$%]{8,}",
                  title: "Enter atleast 8 characters with single capital letter,small letter,number,symbols ",
                }}
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Age"
                label="Age"
                type="text"
                onChange={handleChange}
                id="Age"
                autoComplete="age"
                inputProps={{
                  pattern: "(1[89]|[2-9][0-9]|100)",
                  title: "Please enter Age",
                }}
              
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Phone"
                label="phone"
                onChange={handleChange}
                type="text"
                id="phone"
                autoComplete="Phone"
                inputProps={{
                  pattern: "[789]{1}[0-9]{9}",
                  title: "Wrong phone number",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Address"
                label="Address"
                type="Address"
                onChange={handleChange}
                id="Address"
                autoComplete="Address"
               
                inputProps={{ max: "100", title: "Please enter address" }}
              />
            
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I Agree for Terms and Conditions."
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink variant="button" color="textPrimary" exact to="/user/login" className={classes.link}>
                  {"Already have an account? Sign in"}
                </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}