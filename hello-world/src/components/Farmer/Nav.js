import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import PersonIcon from '@material-ui/icons/Person';



const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Nav() {
  const classes = useStyles();
 

  return (
    <>
      <Toolbar className={classes.toolbar}>
      <PersonIcon/>
        <Button size="small">Naveen Reddy</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
        
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
         Post complaint
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
    
          <Link
            color="inherit"
            noWrap
  
            variant="body2"
            href=''
            className=''
          >
          
          </Link>
      </Toolbar>


      
    </>
  );
}

//Header.propTypes = {
 // sections: PropTypes.array,
  //title: PropTypes.string,
//};