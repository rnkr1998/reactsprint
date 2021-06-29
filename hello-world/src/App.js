import React from 'react';
import { connect } from 'react-redux';

const App = (props) => (
  
    <div>
        Complaint List:
        <ul>
            hii
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        complaints: state
    };
}

export default connect(mapStateToProps)(App);