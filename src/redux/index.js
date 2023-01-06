import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profileSlice'
import dialogsReducer from './dialogsSlice'

let store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer
  }
})

export default store