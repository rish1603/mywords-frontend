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
            correctWord: "",
            answers: [{
                word: "",
            }]
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <Card raised className={classes.card}>
                <CardContent>
                    <Typography variant="h4">{this.state.correctWord} means...</Typography><br />
                    {arrayShuffle(this.state.answers).map(i =>
                    <Typography className={classes.definition} variant="body1" key={i.word}>{i.definition}<RadioButton/></Typography>)}
                </CardContent>
            </Card>
        );
    }

    componentDidMount() {
        const userName = localStorage.getItem('username')
        fetch('http://localhost:8080/' + userName + '/myWords/test', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        }).then((result) => result.json())
            .then((info) => {
                this.setState(() => ({ answers: info, correctWord: info[0].word }))
            }).then(() => {
                console.log(this.state)
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