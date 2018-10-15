import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardStyle from '../CardStyle/CardStyle';

class ViewSupport3 extends Component {

    // define state
    state = {
        support: '',
    }

    // handle input text change
    handleChange = event => {
        this.setState({
            support: event.target.value,
        });
    } // End handle change

    // handle form submission
    handleSubmit = event => {
        // prevent refresh on submission
        event.preventDefault();
        // dispatch info to redux
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
        // direct to next page
        this.props.history.push('/4');
    }

    render() {
        return (
            <div>
                {/* use CardStyle component, props question and functions */}
                <CardStyle 
                    question="Do you feel supported by Prime staff?"
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default connect()(ViewSupport3);