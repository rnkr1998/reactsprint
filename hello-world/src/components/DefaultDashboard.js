import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link , NavLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import farmer from './bodyimg.jpg';
import img from './farmer.jpg';
import farmer3 from './titleimg.png';


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
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  titleimg: {
    borderRadius: '30%',

  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));



export default function DefaultDashboard() {
  const classes = useStyles();
  const styles = {
    body: {
        backgroundImage: `url(${farmer})`,
        height:"100%",
          backgroundPosition : 'center',
            backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
    }
};
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={styles.body}>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
    
      
        <img src={farmer3} height='60px' width='140px' className={classes.titleimg}/>
          <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
        
          </Typography>
          <nav>
          <NavLink  exact to="/user/addfarmer" style={{color:'white'}} >
          <Button color="primary" variant="outlined" className={classes.link}>
            Signup as Farmer
          </Button>
            </NavLink>
           
            <NavLink  exact to="/user/addsupplier" style={{color:'white'}} >
          <Button color="primary" variant="outlined" className={classes.link}>
            Signup as Supplier
          </Button>
            </NavLink>

            <NavLink  exact to="/user/addretailer" style={{color:'white'}} >
          <Button color="primary" variant="outlined" className={classes.link}>
            Signup as Retailer
          </Button>
            </NavLink>
          </nav>
         
          <NavLink  exact to="/user/login" style={{color:'white'}} >
          <Button  color="primary" variant="contained" className={classes.link}>
            LOGIN
          </Button>
            </NavLink>
        
  
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent} >
        <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
       Welcome To
        </Typography>
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
       Farming Assistance System
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          
          <Grid item  xs={12}>
                <Card className={classes.card}  style={{backgroundColor:'#402f2e', color:'white',opacity:'0.8',borderRadius:'12px'}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={farmer}
                    title="Farmer"
                  />
                  <CardContent className={classes.cardContent} style={{backgroundColor:'#5c4543'}}>
                    <Typography gutterBottom variant="h4" component="h1" style={{color:"#c5d1db" }}>
                     Farmer
                    </Typography>
                    <Typography>
                    Agriculture is the most important field off all the sectors. 
                          For having the bread and butter we all are working hard to get it.
                            But there is no sufficient provides r suppliers to work effectively and to communicate clearly.
                          Hence to solve those type of problem we are implementing this application which will provide
                          an effiective manner to help the farmer easily communicate with the retailer and the supplier.
                          To give the support for the farmers in buying are selling the crops and tools required for them while farming this application is used.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Typography size="small" color="default" style={{color:"lightgray"}}>
                     @Fas-Farmer
                    </Typography>
                   
                  </CardActions>
                </Card>
              </Grid>
         



          <Grid item  xs={12}>
                <Card className={classes.card} style={{backgroundColor:'#402f2e', color:'white',opacity:'0.8',borderRadius:'12px'}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={img}
                    title="Supplier"
                  />
                  <CardContent className={classes.cardContent} style={{backgroundColor:'#5c4543'}}>
                    <Typography gutterBottom variant="h4" component="h1" style={{color:"#c5d1db" }}>
                      Supplier
                    </Typography>
                    <Typography>
                    The suppliers who ever want to have any type of  grains,vegetables and fruits. They can post the advertise like they need some particular 
                       type of item. which, will be notified to all the farmers whoever registered. In this way they can communicate and sell the required item.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography size="small" color="default" style={{color:"lightgray"}}>
                     @Fas-Supplier
                    </Typography>
                   
                  </CardActions>
                </Card>
              </Grid>


              <Grid item  xs={12}>
                <Card className={classes.card}  style={{backgroundColor:'#402f2e', color:'white',opacity:'0.8',borderRadius:'12px'}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={farmer}
                    title="Retailer"
                  />
                  <CardContent className={classes.cardContent} style={{backgroundColor:'#5c4543'}}>
                    <Typography gutterBottom variant="h4" component="h1" style={{color:"#c5d1db" }}>
                    Retailer
                    </Typography>
                    <Typography>
                    This application is useful to reatilers also they can sell the tools , fertilizers and pesticides it can be bio and chemical fertilizers.
                        All the requirements for the farming they can sell. The retailer has other offer like they can post the offer of the particular product  and sell them.
                       Which will be notified to the farmer while viewing the offers.
                        
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Typography size="small" color="default" style={{color:"lightgray"}}>
                     @Fas-Retailer
                    </Typography>
                   
                  </CardActions>
                </Card>
              </Grid>
         
          </Grid>
        </Container>

       
      {/* Footer */}
      <footer className={classes.footer} style={{backgroundColor:'lightgrey',opacity:'0.95'}}>

        <Typography variant="h6" align="center" color="textSecondary" component="p" style={{fontWeight:'bold',color:'black'}}>
    CopyRight@2021 FARMING ASSISTANT SYSTEM
        </Typography>
      
      </footer>
      </div>
      {/* End footer */}
    </React.Fragment>
  );
}