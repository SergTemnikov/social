const ADD_POST = 'ADD-POST'

export const addPostAC = (body) => ({ type: ADD_POST, body })

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        text: action.body,
        likes: 0,
        dislikes: 0
      }
      state.posts.push(newPost)
      return state
    default: return state
  }
}

export default profileReducer