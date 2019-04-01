import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Register from './Register';
import SignIn from './SignIn';
import SearchScreen from '../SearchScreen';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class HomeScreen extends React.Component {
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
                  <Route path="/register" component ={Register}/>
                  <Route path="/" component={SignIn}/>
                  <Route path="/something" component={SearchScreen}/>
                </Switch>
              </Fragment>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

function Something() {
  return <h2>Something</h2>;
}

HomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeScreen);