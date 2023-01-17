import React from 'react'
import { CircularProgress, Box, Container } from '@mui/material'

const Loader = () => {
  return (
    <Box sx={{ position: 'absolute', top: '50%', right: '46%', transform: 'translate(-50%, -50%)' }}>
      <Container>
        <CircularProgress />
      </Container>
    </Box>
  )
}

export default Loader