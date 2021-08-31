

import {combineReducers} from 'redux';
import StudentReducer from './reducers/StudentReducer';
// import AuthReducer from './reducers/';

const RootReducer =   combineReducers({

    StudentReducer  ,
    // AuthReducer
})

export default RootReducer;