import { Box } from '@mui/material'
import React from 'react'
import MyPosts from '../MyPosts/MyPosts'
import Profile from '../Profile/Profile'

const ContentInfo = () => {
  return (
    <>
    <Box sx={{margin: '10px'}}>
      <Profile />
      <MyPosts />
    </Box>
    </>
  )
}

export default ContentInfo