import React, { useState } from 'react'
import { Box, Button, Grid, List, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import DialogItem from '../UI/DialogItem/DialogItem'
import MessageItem from '../UI/MessageItem/MessageItem'
import { NavLink } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import { addNewMessageAC } from '../../redux/state'

const Dialogs = ({ dialogs, messages, dispatch }) => {

  let [message, setMessage] = useState('')

  let addNewMessage = (e) => {
    e.preventDefault()
    dispatch(addNewMessageAC(message))
  }

  let dialogsList = dialogs.map(item => {
    return (
      <NavLink key={item.id} to={'/dialogs/' + item.id}>
        <DialogItem name={item.name} icon={<PersonIcon />} />
      </NavLink>
    )
  })

  let messagesList = messages.map(m => {
    return (
      <MessageItem key={m.id} message={m.messageText} />
    )
  })

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List dense>
            {dialogsList}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List sx={{minHeight: '300px'}}>
            {messagesList}
          </List>
          <Box>
            <Grid container spacing={4} alignItems='center'>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  sx={{ margin: '0 0 0 16px' }} />
              </Grid>
              <Grid item xs={3} >
                <Button onClick={addNewMessage}><SendIcon /></Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dialogs