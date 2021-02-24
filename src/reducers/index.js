import { combineReducers } from 'redux'
import todoReducer from './todo'

const allReducers = combineReducers({
    todo : todoReducer,
})

export default allReducers;