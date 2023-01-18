import { Box } from '@mui/material'
import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <>
      <Box>
        <ProfileInfo {...props} />
        <MyPostsContainer />
      </Box>
    </>
  )
}

export default Profile