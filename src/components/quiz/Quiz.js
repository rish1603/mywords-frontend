import React from 'react';
import SearchAppBar from '../searchscreen/SearchAppBar';
import QuizCard from './QuizCard'

class Quiz extends React.Component {

    render() {
        return (
            <div>
                <SearchAppBar />
                <QuizCard />
            </div>
        )
    }
}

export default Quiz;