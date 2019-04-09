import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route, Router, Switch, withRouter, Redirect, ProtectedRoute } from "react-router-dom";
import Register from './Register';
import SignIn from './SignIn';
import SearchScreen from '../searchscreen/SearchScreen';
import Quiz from '../quiz/Quiz'

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
        <div className="HomeScreen">
            <Switch>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/quiz" component={Quiz}/>
              <Route exact path="/search" component={SearchScreen}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

HomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeScreen);