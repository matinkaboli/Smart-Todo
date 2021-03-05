const currentTopic = (state = 'all', action) => {
  switch (action.type) {
    case 'CHANGE_TOPIC':
      return action.payload
    default:
      return state
  }
}
export default currentTopic
