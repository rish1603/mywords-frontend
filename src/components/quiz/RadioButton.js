import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';

const styles = {
  colorPrimary: {
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class RadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: '',
    };
  }

  handleChange = event => {

    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    this.setState({ selectedValue: event.target.value });
    if(this.props.color == "primary") {
      sleep(1000).then(() => this.setState({selectedValue: ''}, () => this.props.handler()))
    }
  };



  render() {
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          color={this.props.color}
          classes={{
           colorPrimary: classes.colorPrimary,
            checked: classes.checked,
          }}
        />
      </div>
    );
  }
}

RadioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButton);