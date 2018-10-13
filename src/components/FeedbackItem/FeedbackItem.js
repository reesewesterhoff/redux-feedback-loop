import React, { Component } from 'react';

class FeedbackItem extends Component {

    render() {
        let feedback = this.props.feedback;
        return(
            <tr>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td>{feedback.date}</td>
                <td><button onClick={() => this.props.deleteFeedback(feedback.id)}>Delete</button></td>
            </tr>
        );
    }
}

export default FeedbackItem;