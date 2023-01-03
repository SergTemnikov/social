import { Box, Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dialogs from '../Dialogs/Dialogs'
import Feed from '../Feed/Feed'
import Friends from '../Friends/Friends'
import Music from '../Music/Music'
import Profile from '../Profile/Profile'
import Settings from '../Settings/Settings'

const Content = ({posts, dialogs, messages}) => {
  return (
    <>
      <Box sx={{ margin: '10px' }}>
        <Container>
          <Routes>
            <Route path='/profile' element={<Profile posts={posts}/>} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/dialogs' element={<Dialogs dialogs={dialogs} messages={messages}/>} />
            <Route path='/friends' element={<Friends />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </Container>
      </Box>
    </>
  )
}

export default Content