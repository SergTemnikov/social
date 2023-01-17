import React from 'react'
import Avatar from '@mui/material/Avatar'
import avatar from './../../img/Avatar.jpg'
import MyPostsContainer from '../MyPosts/MyPostsContainer'
import { Box } from '@mui/material'

const Profile = ({ profile }) => {

  const {fullName, aboutMe, photos} = profile

  return (
    <>
      <Box sx={{ paddingTop: '20px' }}>
        <Avatar
          src={photos.large || avatar}
          sx={{ width: 150, height: 150 }}
          alt='Avatar'
        />
        <span style={{ color: '#20df20', fontWeight: 'bold' }}>Online</span>
      </Box>
      <Box style={{ marginTop: '10px' }}>
        <span>Name: </span> {fullName}
        <br />
        <span>About me: </span> {aboutMe}
      </Box>
      <MyPostsContainer />
    </>
  )
}

export default Profile