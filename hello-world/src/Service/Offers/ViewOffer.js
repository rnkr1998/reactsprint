import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getOffer} from '../../actions/offer'
import ViewCard  from './ViewCard';
import Box from '@material-ui/core/Box';


 class ViewOffer extends Component {
     
     constructor(props)
    
     {
         super(props);
         this.props.getOffer();
         this.state=
         {
             offers:{}
         }
         
     }
        
       
     componentDidMount()
     {
        this.setState({offers:this.props.offers});
     }
   
     

       
    render() {
        console.log(this.props.offers);
        const res = this.props.offers;
       // console.log(this.props.complaints);
       // console.log(res);
       // console.log(this.state.offers);
       // console.log(this.state.complaints);
     //   const res=this.props.complaints;
    
       
        return (  
             
                    <Box display="flex" flexDirection="row">
                    { res.map(data => (
                  
                           <ViewCard key={data.productId} offer={data}/>
                      
                 
                    ))}  
                           </Box>   
        )
    }
}

const mapStateToProps  = (state) => ({offers:state.Offer})

export default connect(mapStateToProps, {getOffer})(ViewOffer)