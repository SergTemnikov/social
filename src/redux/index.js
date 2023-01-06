import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profileSlice'
import dialogsReducer from './dialogsSlice'
import friendsReducer from './friendsSlice'

let store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer
  }
})

export default store