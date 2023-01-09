import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allUsers: [
    {
      id: 1,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 2,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 3,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 4,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 5,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 6,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 7,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 8,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 9,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 10,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 11,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 12,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 13,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 14,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 15,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 16,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 17,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 18,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 19,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 20,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 21,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 22,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
    {
      id: 23,
      name: 'Sergey',
      status: 'It\'s ok',
      photos: { small: 'https://flxt.tmsimg.com/assets/74092_v9_bb.jpg', large: '' },
      followed: false
    },
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
        allUsers: [...state.allUsers, action.payload]
      }
    },
    default: (state) => { return state }
  }
})

export const { follow, unfollow, setAllUsers } = allUsersSlice.actions

export default allUsersSlice.reducer