import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import ContentWrapper from '../ContentWrapper/ContentWapper';
import './../../css/theme.css'

const App = (props) => {
  return (
      <>
        <CssBaseline />
        <Header />
        <ContentWrapper {...props}/>
      </>
  )
}

export default App
