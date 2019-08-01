import { createStore } from 'redux';
import reducer from './reducer';

const restStore = createStore(reducer, applyMiddleware(thunk));
export const defaultQuestions = {
    type: "DEFAULT",
    payload: "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow"
}

export const getTaggedQuestions = {
    type:"TAGGEDQUESTIONS",
    payload: "https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=java&site=stackoverflow"
}

export const getUser = {
    type: "USER",
    payload: "https://api.stackexchange.com/2.2/users/11683?order=desc&sort=reputation&site=stackoverflow"
}

export const 

export default store;