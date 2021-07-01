import React from 'react';
import Farmer from './Farmer/Farmer';

class LoginSuccess extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            data:this.props.data,
            user:this.props.user
        }
    }

    componentDidMount()
    {
        if(this.state.user==='Farmer')
        {

        }
        else if(this.state.user==='Retailer')
        {

        }
        else if(this.state.user==='Supplier')
        {

        }
    }
    render()
    {
        return(
            <>

            </>
        );
    }
}