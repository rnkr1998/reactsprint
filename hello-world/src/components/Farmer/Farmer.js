import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFarmer} from '../../actions/farmer'
//import {getUsers} from '../../actions/complaint'
import Box from '@material-ui/core/Box';
 class Farmer extends Component {
     
     constructor(props)
    
     {
         super(props);
         this.props.getFarmer();
         this.state=
         {
             farmer:{},
          
         }
         
     }
        
       
     componentDidMount()
     {
        this.setState({farmer:this.props.farmer});
        console.log(this.props);
        
     }
   
     

       
    render() {
        const res = this.props.farmer;
    const Email=this.state.props;
     
    
       
        return (
           
         <>
              
    </>
              
          
        )
    }
}

const mapStateToProps  = (state) => ({farmer:state.Farmer})

export default connect(mapStateToProps, {getFarmer})(Farmer)