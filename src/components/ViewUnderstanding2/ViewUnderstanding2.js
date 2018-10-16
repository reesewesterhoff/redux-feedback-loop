import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardStyle from '../CardStyle/CardStyle';

class ViewUnderstanding2 extends Component {

    render() {
        return(
            <div>
                {/* use CardStyle component for styling, props question and functions */}
                <CardStyle 
                    question="How well did you understand today's material?"
                    category="understanding"
                    nextUrl="/3"
                />
            </div>
        );
    }
}

export default connect()(ViewUnderstanding2);