import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profileSlice'
import dialogsReducer from './dialogsSlice'
import friendsReducer from './friendsSlice'
import sidebarReducer from './sidebarSlice'

let store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
    sidebar: sidebarReducer
  }
})

export default store