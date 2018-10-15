import React, { Component } from 'react';
// import axios to make requests to server
import axios from 'axios';
// import feedbackitem
import FeedbackItem from '../FeedbackItem/FeedbackItem';
// import styles
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import sweetalert for delete request
import swal from 'sweetalert';

// table styles
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class FeedbackList extends Component {

    // define state
    state = {
        feedbackArray: [],
    }

    // get feedback data on page load
    componentDidMount = () => {
        this.getFeedback();
    }

    // GET request to server for feedback
    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            console.log(response.data);
            // set empty array equal to data from server
            this.setState({
                feedbackArray: response.data,
            });
        }).catch(error => {
            alert('Error getting feedback from server');
            console.log('error', error);
        });
    } // end GET request

    // DELETE request to server, send id of clicked row
    deleteFeedback = feedbackId => {
        // sweetalert to confirm or cancel delete request
        swal({
            title: 'Are you sure you want to delete?',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then( (willDelete) => {
            if (willDelete) {
                // if confirmed, axios delete request sent
                axios({
                    method: 'DELETE',
                    url: `/feedback/${feedbackId}`
                }).then(() => {
                    this.getFeedback();
                }).catch(error => {
                    alert('Error deleting feedback');
                    console.log('error', error);
                });
                swal('Task successfully deleted!', {
                    icon: 'success'
                });
            }
            else{
                return;
            }
        })
        
    }


    render() {
        const { classes } = this.props;
        return (
            <div className="table">
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>FEELING</TableCell>
                                <TableCell>COMPREHENSION</TableCell>
                                <TableCell>SUPPORT</TableCell>
                                <TableCell>COMMENTS</TableCell>
                                <TableCell>DELETE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* map through array of feedback items, return feedbackitem component for each item */}
                            {this.state.feedbackArray.map(feedback => {
                                return <FeedbackItem
                                    key={feedback.id}
                                    feedback={feedback}
                                    deleteFeedback={this.deleteFeedback}
                                />
                            }
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

FeedbackList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeedbackList);