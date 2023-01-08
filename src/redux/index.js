import { combineReducers, configureStore } from "@reduxjs/toolkit"
import profileReducer from './profileSlice'
import dialogsReducer from './dialogsSlice'
import friendsReducer from './friendsSlice'
import sidebarReducer from './sidebarSlice'
import navbarReducer from './navbarSlice'
import allUsersReducer from './allUsersSlice'

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  friends: friendsReducer,
  sidebar: sidebarReducer,
  navbar: navbarReducer,
  allUsers: allUsersReducer
})

let store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store