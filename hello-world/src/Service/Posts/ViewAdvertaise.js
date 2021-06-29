import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAdvertaise} from '../../actions/post'



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
        console.log(this.props.posts);
        const res = this.props.posts;
       // console.log(this.props.complaints);
       // console.log(res);
       // console.log(this.state.offers);
       // console.log(this.state.complaints);
     //   const res=this.props.complaints;
    
       
        return (
            <div>
                <h3>Data</h3>
            
                
              { res.map(data => {
                return (
                    <ol key={data.postId}>
                     <li> {data.typeOfCrop}</li>  
                     <li> {data.quantity}</li>
                    
                    </ol>
                );
            })}   
        
                <button onClick={this.handle}>Click Me</button>
                <h1>hello world</h1>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({posts:state.Post})

export default connect(mapStateToProps, {getAdvertaise})(ViewAdvertaise)