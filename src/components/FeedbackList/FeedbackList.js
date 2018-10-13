import React, { Component } from 'react';
import axios from 'axios';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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