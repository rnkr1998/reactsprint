
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
        this.handleType = this.handleType.bind(this);
        this.handlequantity = this.handlequantity.bind(this);
        this.handleId = this.handleId.bind(this);
        this. handleSubmit = this.handleSubmit.bind(this);
      this.state=
      {
        typeOfCrop:'',
        quantity:'',
        supplierId:0,
            error: ''
        };
     
       

  }

  handleType(e)
  {
    this.setState({ typeOfCrop:e.target.value});
  }
  handlequantity(e)
  {
    this.setState({quantity:e.target.value});
  }
  handleId(e)
  {
    this.setState({supplierId:e.target.value});
  
  }
 

 
     handleSubmit (e) {
    
      e.preventDefault();
   console.log("clicked");

        if (!this.state.typeOfCrop || !this.state.quantity || !this.state.supplierId) {
            this.setState(() => ({ error: 'Please enter valid values' }));
        } else {
            this.setState(() => ({ error: '' }));
           
            this.props.onSubmitAdvertaise(
                {
                  typeOfCrop:this.state.typeOfCrop,
                  quantity:this.state.quantity,
                  supplierId:this.state.supplierId
                    
                    
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
         Advertaisement
         </Typography>
         <form onSubmit={this.handleSubmit}>
           <TextField
            variant="outlined"
            margin="normal"
             required
             fullWidth
            onChange={this.handleType}
             label="Type Of Crop"
             name=" TypeOfCrop"
             value={this.state.typeOfCrop}
            type="text"
            autoComplete="cid"
            autoFocus
            
           
          />
          <TextField
            variant="outlined"
             margin="normal"
             required
             fullWidth
             onChange={this.handlequantity}
             value={this.state.quantity}
             label="quantity"
            name="quantity"
            type="text"
            autoComplete="bid"
    
             autoFocus
           
            
          />
         
           <TextField
            variant="outlined"
             margin="normal"
            required
            fullWidth
          onChange={this.handleId}
          label="Supplier Id"
           name="SupplierId"
           type="number"
           defaultValue={this.state.supplierId}
         
            autoComplete="bnum"
            autoFocus
            
          
           />
           

        
         <Button
            type="submit"
           fullWidth
             variant="contained"
             color="secondary"
             
           >
             Post Advertaisement
          </Button>
          
        </form>
      
       <Box mt={8}>   
       </Box>
     </Container>
    
 

  
 
  </div>
  );
}
  
}
