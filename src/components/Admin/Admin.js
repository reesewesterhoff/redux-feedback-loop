import React, { Component } from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';

class Admin extends Component {

    render() {
        return(
            <div>
                {/* feedback list table component */}
                <FeedbackList />
            </div>
        );
    }
}

export default Admin;