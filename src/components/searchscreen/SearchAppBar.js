import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LogOutIcon from '@material-ui/icons/ExitToApp'
import TestIcon from '@material-ui/icons/Assignment'

class SearchAppBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false,
      query: ''
    }
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.getWord(this.state.query)
    }
  }

  getWord = () => {
    this.props.getWord(this.state.query)
  }

  handleDrawerOpen = () => {
    this.setState({ drawerIsOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerIsOpen: false });
  };

  handleInputChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  // function SearchAppBar(props) {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              MyWords
          </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onKeyPress={this._handleKeyPress}
                onChange={this.handleInputChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          onClose={this.handleDrawerClose}
          onOpen={this.handleDrawerOpen}
          variant="persistent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={this.state.drawerIsOpen}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div className={classes.drawerInner}>
            <List>
              <ListItem button component={Link} to="/search">
                <ListItemText primary="Home" />
                <ListItemIcon ><HomeIcon/></ListItemIcon>
              </ListItem>
              <ListItem button component={Link} to="/test">
                <ListItemText primary="Test" />
                <ListItemIcon ><TestIcon/></ListItemIcon>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Sign out" />
                <ListItemIcon ><LogOutIcon/></ListItemIcon>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: '100px',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});


SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);