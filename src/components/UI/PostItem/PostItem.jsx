import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

const PostItem = ({ text, likes, dislikes }) => {
  return (
    <Box maxWidth='sm'>
      <Box sx={{ marginTop: '5px', padding: '5px' }} >
        <Typography variant='h6' sx={{ marginBottom: '5px' }}>{text}</Typography>
        <Box sx={{display: 'flex'}}>
          <Box sx={{ display: 'flex', alignContent: 'center' }}>
            {likes} <ThumbUpIcon sx={{ marginLeft: '5px' }} color='success' />
          </Box>
          <Box sx={{ display: 'flex', alignContent: 'center', marginLeft: '20px' }}>
            {dislikes} <ThumbDownIcon sx={{ marginLeft: '5px' }} color='error' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PostItem