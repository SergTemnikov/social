import { Box, Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dialogs from '../Dialogs/Dialogs'
import Feed from '../Feed/Feed'
import Friends from '../Friends/Friends'
import Music from '../Music/Music'
import Profile from '../Profile/Profile'
import Settings from '../Settings/Settings'
import Users from '../Users/Users'
import UsersContainer from '../Users/UsersContainer'

const Content = () => {
  return (
    <>
      <Box>
        <Container>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </Container>
      </Box>
    </>
  )
}

export default Content