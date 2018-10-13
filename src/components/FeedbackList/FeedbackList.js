import React, { Component } from 'react';
import axios from 'axios';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

class FeedbackList extends Component {


    state = {
        feedbackArray: [],
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            console.log(response.data);
            this.setState({
                feedbackArray: response.data,
            });
        }).catch(error => {
            alert('Error getting feedback from server');
            console.log('error', error);
        });
    }

    deleteFeedback = feedbackId => {
        axios({
            method: 'DELETE',
            url: `/feedback/${feedbackId}`
        }).then(() => {
            this.getFeedback();
        }).catch(error => {
            alert('Error deleting feedback');
            console.log('error', error);
        });
    }


    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedbackArray.map(feedback => {
                            return  <FeedbackItem 
                                        key={feedback.id}
                                        feedback={feedback}
                                        deleteFeedback={this.deleteFeedback}
                                    />
                        }
                        )}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default FeedbackList;