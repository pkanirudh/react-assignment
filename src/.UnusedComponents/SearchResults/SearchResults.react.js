import React from 'react';
//import face from '../face.jpg';
import './SearchResults.css';
import { getQuestionsByThunk } from '../reducer'
import { connect } from 'react-redux';
import Iterator from '../Iterator/Iterator.react';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(!this.props.isLoaded){
            return(
                <div >
                <p>Show Question</p>
                <button onClick={this.props.getQuestions}>Get Data</button>
            </div>
            );
        }

        else{
            // return(
            //     this.props.list.items.map(eachQuestion => {
            //     return (
            //         <div className='searchresults_wrapper'>
            //             <div className="container">
            //                 <div className="card bg-light row">
            //                     <div className="card-body">
            //                         <span className="float-left">
            //                             {eachQuestion.score} {eachQuestion.tags}
            //                         </span>
            //                         <span className="float-right">
            //                             <img className="rounded" src = {eachQuestion.owner.profile_image} alt="AuthorDP" width="100"/>
            //                         </span>
            //                         <p className='font-weight-bold'>{eachQuestion.title}</p>
            //                         <p className="text-muted">by {eachQuestion.owner.display_name}</p>
                                    
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     );
            // })
            //     );
            <Iterator list={this.props.list.items}></Iterator>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.payload,
        isLoaded: state.isLoaded
    }
}

const mapDispatchToProps = (dispatch, ) => {
    return {
        getQuestions: () => {
            dispatch(getQuestionsByThunk())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
//export default SearchResults;