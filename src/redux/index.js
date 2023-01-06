import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './profileSlice'

let store = configureStore({
  reducer: {
    profile: profileReducer
  }
})

export default store