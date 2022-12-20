import { Box } from '@mui/material'
import React from 'react'
import Profile from '../Profile/Profile'

const ContentInfo = () => {
  return (
    <>
    <Box sx={{margin: '10px'}}>
      <Profile />
      <div>My Posts</div>
      <div>New Post</div>
      <div>Post 1</div>
      <div>Post 2</div>
    </Box>
    </>
  )
}

export default ContentInfo