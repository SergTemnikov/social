import React, { useState } from 'react'
import { Box, Button, Grid, List, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import DialogItem from '../UI/DialogItem/DialogItem'
import MessageItem from '../UI/MessageItem/MessageItem'
import { NavLink } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from '../../redux/dialogsSlice'

const Dialogs = () => {
  let dialogs = useSelector(state => state.dialogs.messagesPage.dialogs)
  let [message, setMessage] = useState('')
  let messages = useSelector(state => state.dialogs.messagesPage.messages)
  let dispatch = useDispatch()

  let addNewMessage = (e) => {
    e.preventDefault()
    let newMessage = { id: Date.now(), messageText: message }
    dispatch(addMessage(newMessage))
    setMessage('')
  }

  let dialogsList = dialogs.map(item => {
    return (
      <NavLink key={item.id} to={'/dialogs/' + item.id}>
        <DialogItem name={item.name} icon={<PersonIcon />} />
      </NavLink>
    )
  })

  let messagesList = messages.map(m => {
    return <MessageItem key={m.id} message={m.messageText} />
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
          <List sx={{ height: '18rem' }}>
            {messagesList}
          </List>
          <Box sx={{ height: '10%' }}>
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