import React, {Component} from 'react';
import { Router } from "@reach/router";

import Questions from "./Questions";
import Question from "./Question";

class App extends Component {

    constructor(props) {
        super(props);

        // This is my state data initialized
        this.state = {
            data: [
                {
                    id: 1,
                    text: "How do I return the response from an Observable in Angular 2?",
                    answers: [
                        {text: "Observables are lazy so you have to subscribe to get the value.", votes: 5},
                        {text: "You can use asyncPipe", votes: -2},
                        {text: "The reason that it's undefined is that you are making an asynchronous operation", votes: 3},
                    ]
                },
                {
                    id: 2,
                    text: "I have another question. What is..?",
                    answers: [
                        {text: "Answer 1", votes: 2},
                        {text: "Answer 2", votes: 3},
                        {text: "Answer 3", votes: 0}
                    ]
                },
                {
                    id: 3,
                    text: "What IS this??",
                    answers: [
                        {text: "Answer 1", votes: 0},
                        {text: "Answer 2", votes: 1}
                    ]
                }
            ]
        }
    }

    getQuestion(id) {
        return this.state.data.find(q => q.id === Number(id));
    }

    askQuestion(text) {
        const question = {
            id: Math.random() * 10000000,
            text: text,
            answers: []
        };
        this.setState({
            data: [...this.state.data, question]
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>QA Website</h1>
                <Router>
                    <Questions path="/" data={this.state.data}
                        askQuestion={(text) => this.askQuestion(text)}>
                    </Questions>
                    <Question path="/question/:id"
                              getQuestion={(id) => this.getQuestion(id)}></Question>
                </Router>
            </React.Fragment>
        )
    }
}

export default App;

