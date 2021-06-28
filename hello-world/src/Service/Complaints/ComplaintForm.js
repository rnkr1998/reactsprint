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
        this. handleSubmit = this. handleSubmit.bind(this);
      this.state=
      {

            complaintType: props.complaints ? props.complaints.complaintType: '',
            complaintOn: props.complaints ? props.complaints.complaintOn : '',
            complaintMessage: props.complaints ? props.complaints.complaintMessage : '',

            error: ''
        };
     
       

  }



handleType(e)
{
  this.setState({complaintType:e.target.value})
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
            console.log("click handler");
            this.props.onSubmitComplaint(
                {
                    complaintType: this.state.complaintType,
                    complaintMessage: this.state.complaintMessage,
                    complaintOn: this.state.complaintOn,
                    
                }
            );
        }
    }
  


   render(){
  return (
      <div>
    {this.state.error && <p className='error'>{this.state.error}</p>}
    <form onSubmit={this.handleSubmit} className='add-book-form'>

<input type="text" placeholder="Type" autoFocus
    value={this.state.complaintType}
    onChange={this.handleType} />
<br />

<input type="text" placeholder="Message"
    value={this.state.complaintMessage}
    onChange={this.handleMessage} />
<br />

<textarea placeholder="On"
    value={this.state.complaintOn}
    onChange={this.handleOn} />
<br />

<button>Add Complaint</button>
</form>


   {/* <Container component="main" maxWidth="xs">
     <CssBaseline />
     
      
        
        <Typography component="h1" variant="h5" align="center">
          Give Complaint
         </Typography>
         <form>
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
           

        
         <Button
            type="submit"
           fullWidth
             variant="contained"
             color="secondary"
             onSubmit={(e) => onsubmit(e)}
           >
             Post Complaint
          </Button>
          
        </form>
      
       <Box mt={8}>   
       </Box>
     </Container>
    */}
 

  
 
  </div>
  );
}
  
}
