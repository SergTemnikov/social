import React from 'react'
import { Box, Grid, Container } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import Content from '../Content/Content';

const AppWrapper = ({posts, dialogs, messages}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
           <Navbar />
          </Grid>
          <Grid item xs={10}>
           <Content posts={posts} dialogs={dialogs} messages={messages}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AppWrapper