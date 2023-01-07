import React, { useState } from 'react'
import { Box, TextField, Button, Stack, Divider } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { addPost } from '../../redux/profileSlice'

const MyPosts = ({ postsList, dispatch }) => {

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

  return (
    <>
      <Box component='form' sx={{ marginTop: '20px', }}>
        <TextField
          fullWidth
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
        <Divider sx={{marginTop: '20px'}}/>
      </Box>
      {postsList}
      
    </>
  )
}

export default MyPosts