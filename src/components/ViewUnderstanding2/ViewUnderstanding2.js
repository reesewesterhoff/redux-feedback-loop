import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewUnderstanding2 extends Component {

    state = {
        understanding: '',
    }

    handleChange = event => {
        this.setState({
            understanding: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understanding});
    }

    render() {
        return(
            <div>
                <h2>How well did you understand today's material?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" placeholder="1 - 5" onChange={this.handleChange} />
                    <input type="submit" value="Submit" /> 
                </form>
            </div>
        );
    }
}

export default connect()(ViewUnderstanding2);