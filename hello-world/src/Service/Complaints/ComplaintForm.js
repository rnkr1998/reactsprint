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

export default class ComplaintForm extends React.Component {
  constructor(props)
  {
      super(props);
        this.handleType = this.handleType.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleOn = this.handleOn.bind(this);
        this.handleFarmer = this.handleFarmer.bind(this);
        this. handleSubmit = this. handleSubmit.bind(this);
      this.state=
      {

            complaintType:'',
            complaintOn:'',
            complaintMessage:'',
            farmerId:0,
            error: ''
        };
     
       

  }


  handleFarmer(e)
  {
   
    this.setState({farmerId:e.target.value});
    console.log(this.state.farmerId);
  }
handleType(e)
{
  this.setState({complaintType:e.target.value})
  console.log(this.state.complaintType);
}
handleMessage(e)
{
  this.setState({complaintMessage:e.target.value})
}
handleOn (e)
{
  this.setState({complaintOn:e.target.value})
}
     handleSubmit (e) {
      e.preventDefault();
  

        if (!this.state.complaintType || !this.state.complaintOn || !this.state.complaintMessage) {
            this.setState(() => ({ error: 'Please enter valid values' }));
        } else {
            this.setState(() => ({ error: '' }));
           
            this.props.onSubmitComplaint(
                {
                    complaintType: this.state.complaintType,
                    complaintMessage: this.state.complaintMessage,
                    complaintOn: this.state.complaintOn,
                      farmerId:this.state.farmerId
                    
                    
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
          Complaint
         </Typography>
         <form onSubmit={this.handleSubmit}>
           <TextField
            variant="outlined"
            margin="normal"
             required
             fullWidth
             id="cid"
             label="Type"
             name="complainttype"
            value={this.state.complaintType}
            type="text"
            autoComplete="cid"
            onChange={this.handleType}
            autoFocus
            
           
          />
          <TextField
            variant="outlined"
             margin="normal"
             required
             fullWidth
             id="bid"
             value={this.state.complaintMessage}
             label="message"
            name="complaintmessage"
            type="text"
            autoComplete="bid"
            onChange={this.handleMessage}
             autoFocus
           
            
          />
             <TextField
            variant="outlined"
             margin="normal"
            required
            fullWidth
           id="bnum"
            label="On"
           name="Complainton"
           type="text"
           value={this.state.complaintOn}

            onChange={this.handleOn}
            autoComplete="bnum"
            autoFocus
            
          
           />
           <TextField
            variant="outlined"
             margin="normal"
            required
            fullWidth
           id="bnum"
          label="FarmerId"
           name="FarmerId"
           type="number"
           defaultValue={this.state.farmerId}
            onChange={this.handleFarmer}
            autoComplete="bnum"
            autoFocus
            
          
           />
           

        
         <Button
            type="submit"
           fullWidth
             variant="contained"
             color="secondary"
             
           >
             Post Complaint
          </Button>
          
        </form>
      
       <Box mt={8}>   
       </Box>
     </Container>
    
 

  
 
  </div>
  );
}
  
}
