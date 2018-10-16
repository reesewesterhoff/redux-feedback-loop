import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardStyle from '../CardStyle/CardStyle';

class ViewSupport3 extends Component {

    render() {
        return (
            <div>
                {/* use CardStyle component, props question and functions */}
                <CardStyle 
                    question="Do you feel supported by Prime staff?"
                    category="support"
                    nextUrl="/4"
                />
            </div>
        );
    }
}

export default connect()(ViewSupport3);