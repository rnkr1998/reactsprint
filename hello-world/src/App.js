import React from 'react';

export default class App extends React.Component {
  constructor(props)
  {
      super(props);
      this.state=
      {

            complaintType: props.complaints ? props.complaints.complaintType.title : '',
            complaintOn: props.complaints ? props.complaints.complaintOn : '',
            complaintMessage: props.complaints ? props.complaints.complaintMessage : '',

            error: ''
        };
       

  }



handleType = () =>
{
  //this.setState({complaintType:e.target.value})
  console.log(this.state.complaints.complaintType);
}
handleMessage = (e) =>
{
  this.setState({complaintMessage:e.target.value})
  console.log(this.state.complaints.complaintMessage);
}
handleOn =(e) =>
{
  this.setState({complaintOn:e.target.value})
  console.log(this.state.complaints.complaintOn);
}
     Submit =(e) => {
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
                    
                }
            );
        }
    }
  


   render(){
  return (
  //   <Container component="main" maxWidth="xs">
  //     <CssBaseline />
     
      
        
  //       <Typography component="h1" variant="h5" align="center">
  //         Give Complaint
  //       </Typography>
  //       <form>
  //         <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="cid"
  //           label="Type"
  //           name="complainttype"
  //           type="text"
  //           autoComplete="cid"
  //           onChange={this.handleType}
  //           autoFocus
            
           
  //         />
  //         <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="bid"
  //           label="message"
  //           name="complaintmessage"
  //           type="text"
  //           autoComplete="bid"
  //           onChange={this.handleMessage}
  //           autoFocus
           
            
  //        />
  //           <TextField
  //           variant="outlined"
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="bnum"
  //           label="On"
  //           name="Complainton"
  //           type="text"
  //           onChange={this.handleOn}
  //           autoComplete="bnum"
  //           autoFocus
            
          
  //         />
           

        
  //         <Button
  //           type="submit"
  //           fullWidth
  //           variant="contained"
  //           color="secondary"
  //           onSubmit={(e) => onsubmit(e)}
  //         >
  //           Post Complaint
  //         </Button>
          
  //       </form>
      
  //     <Box mt={8}>
       
  //     </Box>
  //   </Container>
  // );
 //}
 <>
  {this.state.error && <p className='error'>{this.state.error}</p>}
 <form onSubmit={this.onSubmit}>
 <input type="text" onChange={this.my} placeholder="complaintType"/>
 <input type="text" onChange={this.complaintMessage} placeholder="complaintMessage"/>
  <input type="text" onChange={this.complaintOn} placeholder="complaintOn"/>
  <button>Submit</button>
  </form>
  </>
  );
}
  
}
