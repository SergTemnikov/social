import React from 'react'
import { Box, TextField, Button, Stack } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import PostItem from '../UI/PostItem/PostItem'

const postText = 'Id like to know much more about React. And I like any other ui libraries like Ant-Design, Material UI, Tailwind CSS'


const MyPosts = () => {
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
          sx={{width: '100%'}}
          multiline={true}
          label="New Post" 
          id="newPostArea" />
        <Stack 
          direction='row' 
          spacing={2} 
          justifyContent='flex-end' 
          sx={{marginTop: '20px'}}>
          <Button variant="contained" endIcon={<SendIcon />}>
            Add post
          </Button>
        </Stack>
      </Box>
      <PostItem text='Hello, World!' likes='14' dislikes='3'/>
      <PostItem text={postText} likes='3' dislikes='1'/>
    </>
  )
}

export default MyPosts