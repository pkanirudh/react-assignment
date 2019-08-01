import React from 'react';
import face from '../face.jpg'
import './QuestionAnswers.css';

class QuestionAnswers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='questionanswers_wrapper'>
                <a href="/">BACK TO SEARCH</a>
                <h5>{this.props.question.title}</h5>
                <div className="container">
                    <div className="card bg-light row">
                        <div className="card-body">
                            <span className="float-left">
                                {this.props.question.score}
                            </span>
                            <span className="float-left">
                                <img className="rounded" src = {this.props.question.owner.profile_image} alt="AuthorDP" width="100"/>
                                <p className="text-muted"><small>{this.props.question.owner.display_name}</small></p>
                            </span>
                            <p>Viewed {this.props.question.view_count} times</p>
                        </div>
                    </div>
                </div>
                <h6>Answered {this.props.question.answer_count}</h6>
                <div className="container">
                    <div className="card bg-light row">
                        <div className="card-body">
                            <span className="float-left">
                                Votes
                            </span>
                            <span className="float-right">
                                <img className="rounded" src = {face} alt="AuthorDP" width="100"/>
                            </span>
                            <p className='font-weight-bold'>Answer Title goes here...</p>
                            <p className="text-muted">by Author Name</p>
                            
                            <p>Answer Text</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionAnswers;