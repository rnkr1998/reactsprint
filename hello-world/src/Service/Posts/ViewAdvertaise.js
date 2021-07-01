import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAdvertaise} from '../../actions/post'
import ViewCard  from './ViewCard';
import Box from '@material-ui/core/Box';


 class ViewAdvertaise extends Component {
     
     constructor(props)
    
     {
         super(props);
         this.props.getAdvertaise();
         this.state=
         {
             posts:{}
         }
         
     }
        
       
     componentDidMount()
     {
        this.setState({posts:this.props.posts});
     }
   
     

       
    render() {
        const res = this.props.posts;
        console.log(res);
       // console.log(this.props.complaints);
       // console.log(res);
       // console.log(this.state.offers);
       // console.log(this.state.complaints);
     //   const res=this.props.complaints;
    
       
        return (
            <Box display="flex" flexDirection= "row" flexWrap="wrap" md={12}>
            { res.map(data => (
          
                   <ViewCard key={data.postId} posts={data}/>
              
         
            ))}  
                   </Box>   
        )
    }
}

const mapStateToProps  = (state) => ({posts:state.Post})

export default connect(mapStateToProps, {getAdvertaise})(ViewAdvertaise)