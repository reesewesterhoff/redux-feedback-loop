import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardStyle from '../CardStyle/CardStyle';

class ViewUnderstanding2 extends Component {

    // define state
    state = {
        understanding: '',
    }

    // handle input changes
    handleChange = event => {
        this.setState({
            understanding: event.target.value,
        });
    } // end handleChange

    // handle form submission
    handleSubmit = event => {
        // prevent refresh on submission
        event.preventDefault();
        // dispatch action to redux
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understanding});
        // direct to next page
        this.props.history.push('/3');
    }

    render() {
        return(
            <div>
                {/* use CardStyle component for styling, props question and functions */}
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