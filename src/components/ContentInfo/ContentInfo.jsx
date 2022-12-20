import { Box } from '@mui/material'
import React from 'react'
import MyPosts from '../MyPosts/MyPosts'
import Profile from '../Profile/Profile'
import PostItem from '../UI/PostItem/PostItem'

const ContentInfo = () => {
  return (
    <>
    <Box sx={{margin: '10px'}}>
      <Profile />
      <MyPosts />
      <PostItem text='Post 1' />
      <PostItem text='Post 2' />
    </Box>
    </>
  )
}

export default ContentInfo