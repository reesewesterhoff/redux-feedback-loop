import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardStyle from '../CardStyle/CardStyle';

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
        this.props.history.push('/3');
    }

    render() {
        return(
            <div>
                <CardStyle 
                    question="How well did you understand today's material?"
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default connect()(ViewUnderstanding2);