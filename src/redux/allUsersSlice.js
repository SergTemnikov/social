import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allUsers: [
    {
      id: 1,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: '', large: '' },
      followed: false
    }
  ]
}

const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    follow: (state, action) => {
      return {
        ...state,
        allUsers: state.allUsers.map(u => {
          if (u.id === action.payload) {
            return { ...u, followed: true }
          } return u
        })
      }
    },
    unfollow: (state, action) => {
      return {
        ...state,
        allUsers: state.allUsers.map(u => {
          if (u.id === action.payload) {
            return { ...u, followed: false }
          } return u
        })
      }
    },
    setAllUsers: (state, action) => {
      return {
        ...state,
        allUsers: [...state.allUsers, action.users]
      }
    },
    default: (state) => { return state }
  }
})

export const { follow, unfollow, setAllUsers } = allUsersSlice.actions

export default allUsersSlice.reducer