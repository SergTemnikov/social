import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  friendsPage: {
    friends: []
  }
}

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    default: (state) => {return state}
  }
})

export const {setFriends} = friendsSlice.actions

export default friendsSlice.reducer