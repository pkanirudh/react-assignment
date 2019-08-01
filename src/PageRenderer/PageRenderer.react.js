import React from 'react';

import './PageRenderer.css';
import UserProfile from '../UserProfile/UserProfile.react';
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers.react';
import Iterator from '../Iterator/Iterator.react';

class PageRenderer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            action: "results",
            passObject: {}
        }
    }

    goToUser(obj){
        this.setState({passObject:obj, action:"user"});
    }

    goToQuestion(obj){
        this.setState({passObject:obj, action:"question"});
    }

    render() {
        if(this.state.action==="results"){
            return (
                this.props.list.map((eachQuestion) => {
                return (
                    <div className='searchresults_wrapper'>
                        <div className="container">
                            <div className="card bg-light row">
                                <div className="card-body">
                                    <span className="float-left">
                                        {eachQuestion.score}
                                    </span>
                                    <span className="float-right">
                                        <img onClick={()=>{this.setState({passObject: eachQuestion.owner,action: "user"})}} className="rounded" src = {eachQuestion.owner.profile_image} alt="AuthorDP" width="100"/>
                                    </span>
                                    <p className='font-weight-bold' onClick={()=>{this.setState({passObject: eachQuestion,action: "question"})}}>{eachQuestion.title}</p>
                                    <p className="text-muted">by {eachQuestion.owner.display_name}</p>
                                    <div className="row">
                                        <p class="col-sm-1">tags:</p>
                                        <Iterator list={eachQuestion.tags}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })
        
        );
        }
        else if(this.state.action==="user"){
            return(
                <div>
                    <UserProfile owner = {this.state.passObject}/>
                </div>
            );
        }
        else if(this.state.action==="question"){
            return (
            <div>
                <QuestionAnswers question = {this.state.passObject}/>
            </div>
            );
        }       
    }
}

export default PageRenderer;