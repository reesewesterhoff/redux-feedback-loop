import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardStyle from '../CardStyle/CardStyle';


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
        // redirect to next page on submit
        this.props.history.push('/2');
    }

    render() {

        return (
            <div className="card">
            <CardStyle 
                    question="How are you feeling today?"
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}


export default connect()(ViewFeeling1);
