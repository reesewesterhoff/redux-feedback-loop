import React, { Component } from "react";

// Material-UI
import { Typography, AppBar, Toolbar } from "@material-ui/core/";


class Header extends Component {
    render() {
        return (
            <header>
                <AppBar position="relative">
                    <Toolbar>
                        <div className="headerText">
                            <Typography align="center" variant="h5" color="inherit">
                                {"My last reminder of the day"}
                            </Typography>
                            <Typography variant="h4" color="inherit">
                                {"...Feedback!"}
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

export default Header;