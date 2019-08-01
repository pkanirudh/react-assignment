import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const getDefaultQuestions = (list, status) => {
    return{
        type: 'QUESTIONS',
        payload: list,
        isLoaded: status
    }
}

export const getTagQuestions = (list, status, tags) => {
    return{
        type: 'TAGQUESTIONS',
        payload: list,
        tags: tags,
        isLoaded: status
    }
}

export function getQuestionsByThunk(tag){
        return function(dispatch){
        axios.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow").
        then(resp => dispatch(getDefaultQuestions(resp.data, true)));
    };
    
    
    
}


const nameInitialState = {
    isLoaded: false,
    list: [{}],
    tags: ""
}
export const reducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case 'QUESTIONS':
            return Object.assign({}, action);
        default:
            return state
    }
}

let restStore = createStore(reducer, applyMiddleware(thunk));

export default restStore;