import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ViewComments4 extends Component {

    state = {
        comments: '',
    }

    handleChange = event => {
        this.setState({
            comments: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.comments});
        this.props.history.push('/5');
        this.postFeedback(this.props.feedback);
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
        return (
            <div>
                <h2>Comments</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Comments" onChange={this.handleChange} />
                    <input type="submit" value="Finish!" />
                </form>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => {
    return {
        feedback: reduxState.feedback,
    }
}

export default connect(mapReduxStateToProps)(ViewComments4);