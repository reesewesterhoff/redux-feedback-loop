import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardStyle from '../CardStyle/CardStyle';

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
        this.props.history.push('/4');
    }

    render() {
        return (
            <div>
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