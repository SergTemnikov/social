import React from 'react'
import Avatar from '@mui/material/Avatar'
import avatar from './../../img/Avatar.jpg'
import MyPostsContainer from '../MyPosts/MyPostsContainer'

const Profile = () => {
  return (
    <>
      <div>
        <Avatar 
          src={avatar}
          sx={{ width: 150, height: 150 }}
          alt='Avatar'
        />
        <span style={{color: '#20df20', fontWeight: 'bold'}}>Online</span>
      </div>
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