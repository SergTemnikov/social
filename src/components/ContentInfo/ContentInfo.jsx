import { Box, Container } from '@mui/material'
import React from 'react'
import Dialogs from '../Dialogs/Dialogs'
import MyPosts from '../MyPosts/MyPosts'
import Profile from '../Profile/Profile'

const ContentInfo = () => {
  return (
    <>
      <Box sx={{ margin: '10px' }}>
        <Container>
          {/* <Profile />
          <MyPosts /> */}
          <Dialogs />
        </Container>
      </Box>
    </>
  )
}

export default ContentInfo