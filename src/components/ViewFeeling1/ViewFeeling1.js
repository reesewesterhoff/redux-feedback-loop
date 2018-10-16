import React, { Component } from 'react';
// import connect to send info to redux
import { connect } from 'react-redux';
// import 
import CardStyle from '../CardStyle/CardStyle';


class ViewFeeling1 extends Component {

    render() {

        return (
            <div className="card">
            {/* use CardStyle component, props question and functions */}
            <CardStyle 
                    question="How are you feeling today?"
                    category="feeling"
                    nextUrl="/2"
                />
            </div>
        );
    }
}


export default connect()(ViewFeeling1);
