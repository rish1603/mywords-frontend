import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import SignIn from './SignIn'
import Register from './Register';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <Tabs
                  value={location.pathname}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  <Tab label="Sign In" value="/" component={Link} to="/" />
                  <Tab label="Register" value="/register" component={Link} to="/register" />
                </Tabs>
                <Switch>
                  {/* <Route path="/register" render={() => <div>Register form</div>} /> */}
                  <Route path="/register" component ={Register} />
                  <Route path="/" component={SignIn} />
                </Switch>
              </Fragment>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);