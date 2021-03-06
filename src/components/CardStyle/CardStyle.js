import React, { Component } from 'react';
// connect to redux
import { connect } from 'react-redux';
// import styling
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import { withRouter } from 'react-router-dom';

// card style
const styles = {
    card: {
        marginTop: 75,
        minWidth: 275,
        maxWidth: 400,

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    nextButton: {
        marginLeft: 100,
    },
    input: {
        margin: 10,
    }
};

class CardStyle extends Component {

    // define state
    state = {
        rating: '',
    }

    // handle form submission
    updateAnswers = property => async event => {
        // prevent refresh on form submission
        event.preventDefault();
        // wait for redux to update
        await this.props.dispatch({
            type: 'UPDATE_ANSWERS',
            payload: {
                ...this.state,
                propertyName: property,
            }
        });
        // direct to next page
        this.props.history.push(this.props.nextUrl);
    }

    handleChange = event => {
        this.setState({
            rating: event.target.value
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="card">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {/* get question from props */}
                            {this.props.question}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            On a scale of 1 to 5
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* uses functions propsed down */}
                        <form onSubmit={this.updateAnswers(this.props.category)} method="get" action="/#/2">
                            <Input required className={classes.input} type="number" placeholder="1-5" min="1" max="5" autoFocus onChange={this.handleChange} />
                            <Button size="small" type="submit" className={classes.nextButton}>NEXT</Button>
                        </form>
                    </CardActions>
                </Card>
            </div>
        );
    }
}


CardStyle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(CardStyle)));