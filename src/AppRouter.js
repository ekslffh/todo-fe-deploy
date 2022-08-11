import { Box, Typography } from "@mui/material";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright ⓒ "}
            nugul.link, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/signin">
                                <SignIn />
                            </Route>
                            <Route path="/signup">
                                <SignUp />
                            </Route>
                            <Route path="/">
                                <App />
                            </Route>
                        </Switch>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Router>
            </div>
        );
    }
}

export default AppRouter;