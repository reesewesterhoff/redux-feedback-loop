import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewSupport3 extends Component {

    state = {
        support: '',
    }

    handleChange = event => {
        this.setState({
            support: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
    }

    render() {
        return (
            <div>
                <h2>Do you feel supported by Prime staff?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" placeholder="1-5" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default connect()(ViewSupport3);