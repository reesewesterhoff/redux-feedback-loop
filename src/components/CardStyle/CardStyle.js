import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';


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

function CardStyle(props) {


        const { classes } = props;

        return (
            <div className="card">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                           {props.question}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            On a scale of 1 to 5
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <form onSubmit={props.handleSubmit} method="get" action="/#/2">
                            <Input className={classes.input} type="number" placeholder="1-5" min="1" max="5" autoFocus onChange={props.handleChange} />
                            <Button size="small" type="submit" className={classes.nextButton}>NEXT</Button>
                        </form>
                    </CardActions>
                </Card>
            </div>
        );
    }


CardStyle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(CardStyle));