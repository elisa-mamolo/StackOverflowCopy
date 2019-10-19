import React, {Component} from 'react';
import {Link} from "@reach/router";
class Question extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const id = this.props.id;
        const question = this.props.getQuestion(id);

        const list = question.answers.map(ans => <li>{ans.text}
            - ({ans.votes})</li>);

        return (
            <React.Fragment>
                <h3>Question!</h3>
                <p>{question.text}</p>

                <ul>
                    {question.answers.length === 0 ? <p>No Answers!</p> : list}
                </ul>
                <Link to="/">Go back to questions</Link>
            </React.Fragment>
        )
    }
}

export default Question;

