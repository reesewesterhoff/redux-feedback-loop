import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';




class FeedbackItem extends Component {

    render() {
        let feedback = this.props.feedback;
        return (
                <TableRow>
                    <TableCell>{feedback.feeling}</TableCell>
                    <TableCell>{feedback.understanding}</TableCell>
                    <TableCell>{feedback.support}</TableCell>
                    <TableCell>{feedback.comments}</TableCell>
                    <TableCell><Button size="small" variant="outlined" color="secondary" onClick={() => this.props.deleteFeedback(feedback.id)}>Delete</Button></TableCell>
                </TableRow>
              
        );
    }
}

export default FeedbackItem;