import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import arrayShuffle from 'array-shuffle';
import RadioButton from './RadioButton';

class QuizCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checkpoint: 0,
            correctWord: "",
            textToDisplay: [""],
            answers: [{
                word: "",
            }]
        }
        this.handler = this.handler.bind(this)
        this.getNextWord = this.getNextWord.bind(this)
        this.handleNextQuestion = this.handleNextQuestion.bind(this)
    }

    render() {
        const { classes } = this.props;

        console.log(this.state.checkpoint)
        if (this.state.checkpoint == 0) {
            return (
                <Card raised className={classes.card}>
                    <CardContent>
                        <Typography variant="h4">{this.state.correctWord}</Typography><br />
                        {arrayShuffle(this.state.answers).map(i =>
                            <Typography className={classes.definition} variant="body1" key={i.word}>{i.definition}
                                <RadioButton handler={this.handler} color={i.color} classses={i.classes} />
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            )
        }
        else {
            return (
                <Card raised className={classes.card}>
                    <CardContent>
                        <Typography variant="h4">{this.state.correctWord}</Typography><br />
                        {arrayShuffle(this.state.answers).map(i =>
                            <Typography className={classes.definition} variant="body1" key={i.word}>{i.sentence}
                                <RadioButton handler={this.handler} color={i.color} classses={i.classes} />
                            </Typography>
                        )}

                    </CardContent>
                </Card>
            )
        }
    }

    handler() {
        if (this.state.checkpoint == 0) {
            this.setState({ checkpoint: 1 })
        }
        else {
            this.handleNextQuestion()
        }
    }

    handleNextQuestion() {
        const userName = localStorage.getItem('username')
        fetch('http://68.183.35.153:8080/' + userName + '/myWords/test/markLearnt', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then(() => {
            this.setState({ checkpoint: 0 })
        }).then(() => {
            this.getNextWord()
        })
    }

    componentDidMount() {
        this.getNextWord()
    }

    getNextWord() {
        const userName = localStorage.getItem('username')
        fetch('http://68.183.35.153:8080/' + userName + '/myWords/test', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((result) => result.json())
            .then((data) => {
                data.map(i => { i.color = "secondary" })
                return data
            }).then((data) => {
                data[0].color = "primary"
                data[0].classes = {
                    colorPrimary: 'classes.colorPrimary',
                    checked: 'classes.checked',
                }
                return data
            }).then((data) => {
                this.setState(() => ({ answers: data, correctWord: data[0].word }))
            }).catch((err) => {
                console.log(err)
            })
    }
}

const styles = theme => ({
    card: {
        minWidth: 275,
        maxWidth: 700,
        minHeight: 300,
        maxHeight: 1000,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px'
    },
    definition: {
        fontSize: 18
    }
});

QuizCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuizCard);