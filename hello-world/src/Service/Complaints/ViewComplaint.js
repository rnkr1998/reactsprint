import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getComplaints} from '../../actions/complaint'
//import {getUsers} from '../../actions/complaint'

import axios from 'axios';
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
       // console.log(this.props.complaints);
       // console.log(res);
        console.log(this.state.complaints);
       // console.log(this.state.complaints);
     //   const res=this.props.complaints;
    
       
        return (
            <div>
                <h3>Data</h3>
            
                
             { res.map(data => {
                return (
                    <ol key={data.complaintId}>
                     <li> {data.complaintType}</li>  
                     <li> {data.complaintMessage}</li>
                     <li> {data.complaintOn}</li>
                    </ol>
                );
            })}  
        
                <button onClick={this.handle}>Click Me</button>
                <h1>hello world</h1>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({complaints:state.Complaint})

export default connect(mapStateToProps, {getComplaints})(ViewComplaint)