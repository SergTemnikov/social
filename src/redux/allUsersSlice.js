import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allUsers: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
        allUsers: [...action.payload]
      }
    },
    setTotalUsersCount: (state, action) => {
      return {
        ...state,
        totalUsersCount: action.payload
      }
    },
    setCurrentPage: (state, action) => {
      return {
        ...state,
        currentPage: action.payload
      }
    },
    default: (state) => { return state }
  }
})

export const { 
  follow, 
  unfollow, 
  setAllUsers, 
  setCurrentPage, 
  setTotalUsersCount } = allUsersSlice.actions

export default allUsersSlice.reducer