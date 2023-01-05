const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

export const addNewMessageAC = (body) => ({ type: ADD_NEW_MESSAGE, body })

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMessage = {id: 1,messageText: action.body}
      state.messages.push(newMessage)
      return state
    default: return state
  }
}

export default dialogsReducer