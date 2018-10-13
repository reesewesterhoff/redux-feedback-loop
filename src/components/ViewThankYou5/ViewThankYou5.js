import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
};

class ViewThankYou5 extends Component {

    render() {

        const { classes } = this.props;

        return (
            <div>
                <div className="card">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Thank You!
                            </Typography>
                        </CardContent>
                        <CardActions>
                                <Button className="submitButton"><Link to="/">Submit New Feedback</Link></Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

ViewThankYou5.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewThankYou5);