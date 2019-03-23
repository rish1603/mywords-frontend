import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CenteredTabs from './CenteredTabs';

class Homescreen extends React.Component {
  render() {
    return (
      <div className="homescreen">
        <CenteredTabs/>
      </div>
    );
  }
}

export default Homescreen;