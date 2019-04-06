import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs'
import { Link } from "react-router-dom";

class MyTabs extends React.Component {
  render() {
    const selectedTab = this.props.selectedTab;
    return (
      <Tabs
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Sign In" value="/" component={Link} to="/" />
        <Tab label="Register" value="/register" component={Link} to="/register" />
      </Tabs>
    )
  }
}

export default MyTabs;