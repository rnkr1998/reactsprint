import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getComplaints} from '../../actions/complaint'
import axios from 'axios';
 class ViewComplaint extends Component {
     state=
     {
        datas:[]
     }


     handle = async ()=>{


        const  result =   await  axios.get('http://localhost:8080/api/supplier/getcomplains/all');
 
              this.setState({datas:result.data});
 
                
 
         }
    componentDidMount(){
        this.props.getComplaints();
        
    }
    render() {
        let res= this.state.datas;
      //const[complaints]=this.props.complaint;
//console.log(complaints);
console.log(this.state.datas);
       
        return (
            <div>
                <h3>Data</h3>
            
                
            {res.map(data => {
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

const mapStateToProps  = (state) => ({complaint
    :state.complaint})

export default connect(mapStateToProps, {getComplaints})(ViewComplaint)