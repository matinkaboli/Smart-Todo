import { combineReducers } from 'redux'
import todoReducer from './todo'
import topicReducer from './topic'
const allReducers = combineReducers({
  todo: todoReducer,
  currentTopic: topicReducer,
})

export default allReducers
