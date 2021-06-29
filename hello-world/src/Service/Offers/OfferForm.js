
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export default class OfferForm extends React.Component {
  constructor(props)
  {
      super(props);
        this.handleName = this.handleName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleDiscount = this.handleDiscount.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleTips = this.handleTips.bind(this);
        this.handleId = this.handleId.bind(this);
        this. handleSubmit = this.handleSubmit.bind(this);
      this.state=
      {
        productName:'',
        productPrice:'',
        productDiscount:'',
        productQuantity:'',
        farmingTips:'',
        retailerId:0,
            error: ''
        };
     
       

  }

  handleName(e)
  {
    this.setState({productName:e.target.value});
  }
  handleDiscount(e)
  {
    this.setState({productDiscount:e.target.value});
  }
  handleQuantity(e)
  {
    this.setState({productQuantity:e.target.value});
  
  }
  handlePrice(e)
  {
    this.setState({productPrice:e.target.value});
  }
  handleTips(e)
  {
    this.setState({farmingTips:e.target.value});
  }
  handleId(e)
  {
    this.setState({retailerId:e.target.value});
  }
 
     handleSubmit (e) {
    
      e.preventDefault();
   console.log("clicked");

        if (!this.state.productName || !this.state. productPrice || !this.state.productDiscount || !this.state.productQuantity|| !this.state.farmingTips) {
            this.setState(() => ({ error: 'Please enter valid values' }));
        } else {
            this.setState(() => ({ error: '' }));
           
            this.props.onSubmitOffer(
                {
                  productName:this.state.productName,
                  productPrice:this.state.productPrice,
                  productDiscount:this.state.productDiscount,
                  productQuantity:this.state.productQuantity,
                  farmingTips:this.state.farmingTips,
                  retailerId:this.state.retailerId
                    
                    
                }
            );
        }
    }
  


   render(){
  return (
      <div>
    {this.state.error && <p className='error'>{this.state.error}</p>}
   
    <Container component="main" maxWidth="xs">
     <CssBaseline />
     
      
        
        <Typography component="h1" variant="h5" align="center">
         Offer
         </Typography>
         <form onSubmit={this.handleSubmit}>
           <TextField
            variant="outlined"
            margin="normal"
             required
             fullWidth
            onChange={this.handleName}
             label="Name"
             name=" productName"
             value={this.state.productName}
            type="text"
            autoComplete="cid"
            autoFocus
            
           
          />
          <TextField
            variant="outlined"
             margin="normal"
             required
             fullWidth
             onChange={this.handlePrice}
             defaultValue={this.state.productPrice}
             label="Price"
            name=" productPrice"
            type="number"
            autoComplete="bid"
    
             autoFocus
           
            
          />
             <TextField
            variant="outlined"
             margin="normal"
            required
            fullWidth
            onChange={this.handleDiscount}
            label="Discount"
           name="productDiscount"
           type="text"
           value={this.state.productDiscount}
           
            autoComplete="bnum"
            autoFocus
            
          
           />
           <TextField
            variant="outlined"
             margin="normal"
            required
            fullWidth
          
          label="productQuantity"
           name=" productQuantity"
           type="text"
           value={this.state.productQuantity}
           onChange={this.handleQuantity}
            autoComplete="bnum"
            autoFocus
            
          
           />
           <TextField
            variant="outlined"
             margin="normal"
            required
            fullWidth
          onChange={this.handleTips}
          label="farmingTips"
           name="farmingTips"
           type="text"
           value={this.state.farmingTips}
         
            autoComplete="bnum"
            autoFocus
            
          
           />
           <TextField
            variant="outlined"
             margin="normal"
            required
            fullWidth
          onChange={this.handleId}
          label="RetailerId"
           name="RetailerId"
           type="number"
           defaultValue={this.state.retailerId}
         
            autoComplete="bnum"
            autoFocus
            
          
           />
           

        
         <Button
            type="submit"
           fullWidth
             variant="contained"
             color="secondary"
             
           >
             Post Offer
          </Button>
          
        </form>
      
       <Box mt={8}>   
       </Box>
     </Container>
    
 

  
 
  </div>
  );
}
  
}
