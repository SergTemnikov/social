import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  profilePage: {
    posts: []
  }
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.profilePage.posts.push(action.payload)
    },
    default: (state) => {return state}
  }  
})

export const {addPost} = profileSlice.actions

export default profileSlice.reducer

