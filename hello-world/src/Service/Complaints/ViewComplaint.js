import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getComplaints} from '../../actions/complaint'
//import {getUsers} from '../../actions/complaint'
import ViewCard  from './ViewCard';
import Box from '@material-ui/core/Box';
 class ViewComplaint extends Component {
     
     constructor(props)
    
     {
         super(props);
         this.props.getComplaints();
         this.state=
         {
             complaints:{}
         }
         
     }
        
       
     componentDidMount()
     {
        this.setState({complaints:this.props.complaints});
     }
   
     

       
    render() {
        const res = this.props.complaints;
    
     
    
       
        return (
           
         
                <Box display="flex">
             { res.map(data => (
           
                    <ViewCard key={data.complaintId} complaint={data}/>
               
          
             ))}  
                    </Box>   
    
              
          
        )
    }
}

const mapStateToProps  = (state) => ({complaints:state.Complaint})

export default connect(mapStateToProps, {getComplaints})(ViewComplaint)