import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewFeeling1 extends Component {

    state = {
        feeling: '',
    }

    handleChange = event => {
        this.setState({
            feeling: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling });
    }

    render() {
        return (
            <div>
                <h2>How Are You Feeling Today On A Scale Of 1 - 5?</h2>
                <form onSubmit={this.handleSubmit} >
                    <input type="number" placeholder="1 - 5" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default connect()(ViewFeeling1);