import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

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

    state = {
        comments: '',
    }

    handleChange = event => {
        this.setState({
            comments: event.target.value,
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        await this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
        await this.postFeedback(this.props.feedback);
        await this.props.history.push('/5');
    }

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
    }

    
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
                                <Button type="submit" value="Finish!" className={classes.button}>Finish!</Button>
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

const mapReduxStateToProps = reduxState => {
    return {
        feedback: reduxState.feedback,
    }
}

export default connect(mapReduxStateToProps)(withStyles(styles)(ViewComments4));





