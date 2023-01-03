import React from 'react'
import { Box, Grid, List } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import DialogItem from '../UI/DialogItem/DialogItem'
import MessageItem from '../UI/MessageItem/MessageItem'
import { NavLink } from 'react-router-dom'

const Dialogs = ({dialogs, messages}) => {

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
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <List dense>
              {dialogsList}
            </List>
          </Grid>
          <Grid item xs={9}>
            <List>
              {messagesList}
            </List>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Dialogs