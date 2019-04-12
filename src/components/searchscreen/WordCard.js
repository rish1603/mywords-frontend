import React from 'react';
import Sound from 'react-sound'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import classnames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SoundIcon from '@material-ui/icons/VolumeUp';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

class WordCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      playStatus: Sound.status.STOPPED
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  playSound = () => {
    this.setState({playStatus: Sound.status.PLAYING})
  }

  handleSongFinishedPlaying = () => {
    this.setState({playStatus: Sound.status.STOPPED })
  }

  // function WordCard(props) {
  render() {
    const { classes } = this.props;

    var sentenceList = []
    const displayedSentences = () => {
      for (let i = 1; i < 5; i++) {
        sentenceList.push(
          <Typography paragraph key={i} variant="body1" className={classes.sentences}>
            {this.props.word.sentences[i]}<br/>
          </Typography>
        )
      }
      return sentenceList
    }

    return (
      <Card raised className={classes.card}>
        <CardContent>
          <Typography variant="h3"> {this.props.word.word} </Typography><br />
          <IconButton onClick={this.playSound}><SoundIcon/></IconButton>
          <Sound
            url={this.props.word.mp3}
            playStatus={this.state.playStatus}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
          <Typography variant="subtitle1" color="textSecondary"> {this.props.word.lexicalCategory} </Typography> <br />
          <Typography className={classes.definition} variant="body1" component="p">{this.props.word.definition}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
              {displayedSentences()}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 350,
    minHeight: 300,
    maxHeight: 700,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '50px'
  },
  title: {
    fontSize: 14,
  },
  definition: {
    fontSize: 18
  },
  sentences: {
    fontSize: 15
  },
  hint: {
    marginLeft: 'auto'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: '42%',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

WordCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(WordCard);