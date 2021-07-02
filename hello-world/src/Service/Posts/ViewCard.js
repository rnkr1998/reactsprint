import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pimg from './pimg.jpg';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ViewCard=({posts})=> {
  const classes = useStyles();



//   private int productId; 
//   private String productName; 
//   private int productPrice; 
//   private String productDiscount; 
//   private String productQuantity; 
//   private String farmingTips;


  return (
    <Card className={classes.root}  style={{ backgroundColor: '#77b5b5'}}>
      <CardActionArea style={{ backgroundColor: '#77b5b5',margin:'5px'}}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={pimg}
          title="Contemplative Reptile"
        />
        <CardContent style={{ backgroundColor: '#6ea5ba'}}>
          <Typography gutterBottom variant="h5" component="h2">
          {posts.typeOfCrop}
          </Typography>
          <br/>
          <Typography variant="bold" color="textSecondary" component="h3">
          ID: {posts.postId}
          </Typography>
            <br/>
          <Typography variant="bold" color="textSecondary" component="h3">
           Quantity : {posts.quantity}kgs
          </Typography>
          <br/>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
     
      </CardActions>
    </Card>
  );
}

export default ViewCard;
