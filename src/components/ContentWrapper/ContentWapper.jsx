import React from 'react'
import { Box, Grid, Container } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import Content from '../Content/Content';

const AppWrapper = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
           <Navbar />
          </Grid>
          <Grid item xs={10}>
           <Content {...props}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AppWrapper