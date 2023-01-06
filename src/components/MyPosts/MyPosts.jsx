import React, { useState } from 'react'
import { Box, TextField, Button, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import PostItem from '../UI/PostItem/PostItem'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../../redux/profileSlice'
// import { addPostAC } from '../../redux/profileSlice'

const MyPosts = () => {
  const posts = useSelector((state) => state.profile.profilePage.posts)
  const dispatch = useDispatch()

  let [newPostText, setNewPostText] = useState('')

  let addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      id: Date.now(),
      text: newPostText,
      likes: 0,
      dislikes: 0
    }
    dispatch(addPost(newPost))
    setNewPostText('')
  }

  let postsList = posts.map(post => {
    return (
      <PostItem key={post.id} text={post.text} likes={post.likes} dislikes={post.dislikes} />
    )
  })

  return (
    <>
      <Box
        component='form'
        sx={{
          width: 500,
          maxWidth: '100%',
          marginTop: '20px',
        }}
      >
        <TextField
          sx={{ width: '100%' }}
          multiline={true}
          value={newPostText}
          onChange={e => setNewPostText(e.target.value)}
          label="New Post"
          id="newPostArea" />
        <Stack
          direction='row'
          spacing={2}
          justifyContent='flex-end'
          sx={{ marginTop: '20px' }}>
          <Button onClick={addNewPost} variant="contained" endIcon={<SendIcon />}>
            Add post
          </Button>
        </Stack>
      </Box>
      {postsList}
    </>
  )
}

export default MyPosts