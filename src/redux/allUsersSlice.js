import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allUsers: [],
  pageSize: 5,
  totalUsersCount: 0
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
        allUsers: [...state.allUsers, ...action.payload]
      }
    },
    default: (state) => { return state }
  }
})

export const { follow, unfollow, setAllUsers } = allUsersSlice.actions

export default allUsersSlice.reducer