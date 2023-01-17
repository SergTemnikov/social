import React from 'react'
import { CircularProgress, Box } from '@mui/material'

const Loader = () => {
  return (
    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <CircularProgress />
    </Box>
  )
}

export default Loader