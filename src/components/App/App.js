import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import ContentWrapper from '../ContentWrapper/ContentWapper';
import './../../css/theme.css'

const App = ({posts, dialogs, messages}) => {
  return (
      <>
        <CssBaseline />
        <Header />
        <ContentWrapper posts={posts} dialogs={dialogs} messages={messages}/>
      </>
  )
}

export default App
