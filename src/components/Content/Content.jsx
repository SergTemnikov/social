import { Box, Container } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dialogs from '../Dialogs/Dialogs'
import Feed from '../Feed/Feed'
import Friends from '../Friends/Friends'
import Music from '../Music/Music'
import Profile from '../Profile/Profile'
import Settings from '../Settings/Settings'

const Content = (props) => {
  return (
    <>
      <Box sx={{ margin: '10px' }}>
        <Container>
          <Routes>
            <Route path='/profile' element={
              <Profile
                posts={props.state.profilePage.posts}
                addPost={props.state.addPost}/>}
            />
            <Route path='/feed' element={<Feed />} />
            <Route path='/dialogs' element={
              <Dialogs
                dialogs={props.state.messagesPage.dialogs}
                messages={props.state.messagesPage.messages} />} />
            <Route path='/friends' element={<Friends friends={props.state.friendsPage.friends}/>}
            />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </Container>
      </Box>
    </>
  )
}

export default Content