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
//import titleimg from './farmer.jpg';
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
            <NavLink variant="button" color="textPrimary" exact to="/user/login" className={classes.link}>
              Farmer
            </NavLink>
           
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Supplier
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Retailer
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent} >
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
          
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={farmer}
                    title="Farmer"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Farmer
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>
         



              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={farmer}
                    title="Supplier"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Supplier
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>
         


              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={farmer}
                    title="Retailer"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Retailer
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                   
                  </CardActions>
                </Card>
              </Grid>
         
          </Grid>
        </Container>

       
      {/* Footer */}
      <footer className={classes.footer}>

        <Typography variant="h6" align="center" color="textSecondary" component="p" style={{fontWeight:'bold',color:'black'}}>
    CopyRight@2021 developed using react
        </Typography>
      
      </footer>
      </div>
      {/* End footer */}
    </React.Fragment>
  );
}