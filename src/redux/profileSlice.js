import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  profilePage: {
    posts: [],
    profile: null
  }
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.profilePage.posts.push(action.payload)
    },
    setProfile: (state, action) => {
      return {
        ...state,
        profilePage: {...state.profilePage, profile: action.payload}
      }
    },
    default: (state) => {return state}
  }  
})

export const {addPost, setProfile} = profileSlice.actions

export default profileSlice.reducer

