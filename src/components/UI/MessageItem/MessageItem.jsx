import { Card, ListItem, Typography } from '@mui/material'
import React from 'react'

const MessageItem = ({ message }) => {
  return (
    <ListItem>
      <Card sx={{padding: '7px'}}>
        <Typography>
          {message}
        </Typography>
      </Card>
    </ListItem>
  )
}

export default MessageItem