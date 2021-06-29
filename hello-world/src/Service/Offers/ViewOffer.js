import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getOffer} from '../../actions/offer'



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
            <div>
                <h3>Data</h3>
            
                
              { res.map(data => {
                return (
                    <ol key={data.productId}>
                     <li> {data.productName}</li>  
                     <li> {data.productPrice}</li>
                     <li> {data.productQuantity}</li>
                     <li> {data.farmingTips}</li>
                    </ol>
                );
            })}   
        
                <button onClick={this.handle}>Click Me</button>
                <h1>hello world</h1>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({offers:state.Offer})

export default connect(mapStateToProps, {getOffer})(ViewOffer)