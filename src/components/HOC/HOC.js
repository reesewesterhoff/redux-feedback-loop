import React, { Component } from 'react';
import { connect } from 'react-redux';


const HOC = (propName) => (WrappedComponent) => {
    return class HOC extends Component {
        render() {
            return this.props[propName]
        }
    }
}
class HOC extends Component {

    state = {
        feedback: {
            feeling: '',
            understanding: '',
            support: '',
            comments: '',
        }
    }

    handleChangeFor = propertyName => event => {
        this.setState({
            feedback: {
                ...this.state.feedback,
                [propertyName]: event.target.value
            }
        });
    }

    render() {
        return(
            <div>
                <form>
                    <input type="number" placeholder="1-5" onChange={this.handleChangeFor(this.props)} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default connect()(HOC);

