import React from 'react'
import Avatar from '@mui/material/Avatar'
import avatar from './../../img/Avatar.jpg'
import MyPostsContainer from '../MyPosts/MyPostsContainer'
import { Box } from '@mui/material'

const Profile = () => {
  return (
    <>
      <Box sx={{paddingTop: '20px'}}>
        <Avatar 
          src={avatar}
          sx={{ width: 150, height: 150 }}
          alt='Avatar'
        />
        <span style={{color: '#20df20', fontWeight: 'bold'}}>Online</span>
      </Box>
      <div style={{marginTop: '10px'}}>
        <span>Name: </span> Serg Temnikov
        <br/>
        <span>Age: </span> 36
      </div>
      <MyPostsContainer/>
    </>
  )
}

export default Profile