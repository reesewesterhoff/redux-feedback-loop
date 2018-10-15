import React, { Component } from 'react';
// import connect to send info to redux
import { connect } from 'react-redux';
// import 
import CardStyle from '../CardStyle/CardStyle';


class ViewFeeling1 extends Component {

    // define state
    state = {
        feeling: '',
    }

    // handle input box changes
    handleChange = event => {
        // set state to be value of the input box
        this.setState({
            feeling: event.target.value,
        });
    } // end handleChange

    // handle form submission
    handleSubmit = event => {
        // prevent page refresh
        event.preventDefault();
        // send info to redux state
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling });
        // redirect to next page on submit
        this.props.history.push('/2');
    } // end handleSubmit

    render() {

        return (
            <div className="card">
            {/* use CardStyle component, props question and functions */}
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
