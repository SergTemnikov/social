import React from 'react'
import { Paper } from '@mui/material'

const PostItem = ({ text }) => {
  return (
    <Paper sx={{marginTop: '5px', padding: '5px'}}>
      <div>{text}</div>
    </Paper>
  )
}

export default PostItem