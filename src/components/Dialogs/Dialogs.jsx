import React from 'react'
import { Box, Grid, List } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import DialogItem from '../UI/DialogItem/DialogItem'
import MessageItem from '../UI/MessageItem/MessageItem'

const dialogItems = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Svetlana' },
  { id: 4, name: 'Boris' },
  { id: 5, name: 'Margarita' },
  { id: 6, name: 'Mary' }
]

const messages = [
  { id: 1, messageText: 'Hello' },
  { id: 2, messageText: 'How are u, buddy?' },
  { id: 3, messageText: 'I am Okay' },
  { id: 4, messageText: 'Wanna see u soon, bro' },
  { id: 5, messageText: 'Tryin to become fantastic developer' },
  { id: 5, messageText: 'Tryin to become fantastic teamlead' }
]

const Dialogs = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <List dense>
              {dialogItems.map(item => {
                return (
                  <DialogItem name={item.name} icon={<PersonIcon />} />
                )
              })}
            </List>
          </Grid>
          <Grid item xs={9}>
            <Box>
              <List>
                {messages.map(m => {
                  return (
                    <MessageItem key={m.id} message={m.messageText} />
                  )
                })}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Dialogs