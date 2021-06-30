import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pimg from './pimg.jpeg';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ViewCard=({offer})=> {
  const classes = useStyles();
  console.log(offer);



//   private int productId; 
//   private String productName; 
//   private int productPrice; 
//   private String productDiscount; 
//   private String productQuantity; 
//   private String farmingTips;


  return (
    <Card className={classes.root} style={{ backgroundColor: '#769c73',margin:'10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={pimg}
          title="Contemplative Reptile"
        />
        <CardContent style={{ backgroundColor: '#8ac286'}}>
          <Typography gutterBottom variant="h5" component="h2">
         {offer.productName}
          </Typography>
          <br/>
          <Typography variant="bold" color="textSecondary" component="h3">
           Discount : {offer.productDiscount}%
          </Typography>
            <br/>
          <Typography variant="bold" color="textSecondary" component="h3">
           Quantity : {offer.productQuantity}kgs
          </Typography>
          <br/>
          <Typography variant="bold" color="textSecondary" component="h3">
           Tips : {offer.farmingTips}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <CardContent variant="i" color="primary" component="i">
         Price: {offer.productPrice}.00
        </CardContent>
      </CardActions>
    </Card>
  );
}

export default ViewCard;
