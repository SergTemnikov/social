import React from 'react'
import { Box, Grid, Container } from '@mui/material'
import Navbar from './../Navbar/Navbar'
import ContentInfo from '../ContentInfo/ContentInfo';

const Content = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
           <Navbar />
          </Grid>
          <Grid item xs={10}>
           <ContentInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Content