import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect()(ViewComments4);