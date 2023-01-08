import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  messagesPage: {
    dialogs: [
      { id: 1, name: 'Andrew' },
      { id: 2, name: 'Alex' },
      { id: 3, name: 'Svetlana' },
      { id: 4, name: 'Boris' },
      { id: 5, name: 'Margarita' },
      { id: 6, name: 'Mary' }
    ],
    messages: []
  }
}

export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messagesPage.messages.push(action.payload)
    },
    default: (state) => {return state}
  }
})

export const { addMessage } = dialogsSlice.actions

export default dialogsSlice.reducer


// const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

// export const addNewMessageAC = (body) => ({ type: ADD_NEW_MESSAGE, body })

// const dialogsReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_NEW_MESSAGE:
//       let newMessage = {id: 1,messageText: action.body}
//       state.messages.push(newMessage)
//       return state
//     default: return state
//   }
// }

// export default dialogsReducer