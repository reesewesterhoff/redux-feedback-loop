import React, { Component } from 'react';
// connect to redux
import { connect } from 'react-redux';
// use axios for posting to server
import axios from 'axios';
// import styles
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

// card styling
const styles = {
    card: {
        marginTop: 75,
        minWidth: 275,
        maxWidth: 400,
        minHeight: 130,

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        marginLeft: 100,
    },
};

class ViewComments4 extends Component {

    // define state
    state = {
        comments: '',
    }

    // handle input text change
    handleChange = event => {
        this.setState({
            comments: event.target.value,
        });
    } // end handleChange

    // handle form submission, use async so comment is added before axios POST request
    handleSubmit = async event => {
        // prevent page refresh
        event.preventDefault();
        // dispatch action to redux
        await this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
        // call POST request
        await this.postFeedback(this.props.feedback);
        // direct to next page
        await this.props.history.push('/5');
    }

    // POST request to server with feedback object
    postFeedback = (feedback) => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then(() => {
        }).catch(error => {
            alert('Error submitting feedback');
            console.log('error', error);
        });
    } // end POST request

    render() {

        const { classes } = this.props;

        return (
                <div className="card">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Comments
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <form onSubmit={this.handleSubmit}>
                                <Input type="text" placeholder="Comments" autoFocus onChange={this.handleChange} />
                                <Button type="submit" value="Finish!" variant="contained" color="primary" className={classes.button}>Finish!</Button>
                            </form>
                        </CardActions>
                    </Card>
                </div>
        );
    }
}

ViewComments4.propTypes = {
    classes: PropTypes.object.isRequired,
};

// get feedback object from redux
const mapReduxStateToProps = reduxState => {
    return {
        feedback: reduxState.feedback,
    }
}

export default connect(mapReduxStateToProps)(withStyles(styles)(ViewComments4));





