import React from 'react'
import { Avatar } from '@mui/material'
import MockAvatar from './../../../img/MockAvatar.jpg'

const ProfileInfo = ({profile}) => {
  const {aboutMe, fullName, photos} = profile
  return (
    <div>
      <div>
        <Avatar 
          src={photos.large || MockAvatar}
          sx={{ width: 150, height: 150 }}
          alt='Avatar'
        />
        <span style={{color: '#20df20', fontWeight: 'bold'}}>Online</span>
      </div>
      <div style={{marginTop: '10px'}}>
        <span>Name: </span> {fullName}
        <br/>
        <span>About: </span> {aboutMe}
      </div>
    </div>
  )
}

export default ProfileInfo