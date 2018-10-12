import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewThankYou5 extends Component {

    render() {
        return(
            <div>
                <h2>Thank You!</h2>
                <button><Link to="/">Submit New Feedback</Link></button>
            </div>
        );
    }
}

export default ViewThankYou5;