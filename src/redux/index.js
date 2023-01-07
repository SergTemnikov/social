import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from './profileSlice'
import dialogsReducer from './dialogsSlice'
import friendsReducer from './friendsSlice'
import sidebarReducer from './sidebarSlice'
import navbarReducer from './navbarSlice'

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  friends: friendsReducer,
  sidebar: sidebarReducer,
  navbar: navbarReducer
})

let store = configureStore({
  reducer: rootReducer
})

export default store