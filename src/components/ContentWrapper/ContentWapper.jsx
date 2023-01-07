import React from 'react'
import { Box, Grid, Container } from '@mui/material'
import Content from '../Content/Content';
import Siderbar from '../Sidebar/Siderbar';
import NavbarContainer from '../Navbar/NavbarContainer';

const AppWrapper = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <NavbarContainer />
          </Grid>
          <Grid item xs={7}>
            <Content />
          </Grid>
          <Grid item xs={3}>
            <Siderbar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AppWrapper