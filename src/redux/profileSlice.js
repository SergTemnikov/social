import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  profilePage: {
    posts: [
      { id: 1, text: 'Hello, World!', likes: 14, dislikes: 3 },
      { id: 2, text: 'Id like to know much more about React. And I like any other ui libraries like Ant-Design, Material UI, Tailwind CSS', likes: 7, dislikes: 1 }
    ]
  }
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.profilePage.posts.push(action.payload)
    }
  }  
})

export const {addPost} = profileSlice.actions

export default profileSlice.reducer

// const ADD_POST = 'ADD-POST'

// export const addPostAC = (body) => ({ type: ADD_POST, body })

// const profileReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_POST:
//       let newPost = {
//         id: 3,
//         text: action.body,
//         likes: 0,
//         dislikes: 0
//       }
//       state.posts.push(newPost)
//       return state
//     default: return state
//   }
// }

// export default profileReducer

