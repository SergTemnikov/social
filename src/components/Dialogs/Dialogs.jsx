import React from 'react'
import { Box, Grid, List } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import DialogItem from '../UI/DialogItem/DialogItem';

const dialogItems = ['Andrew', 'Aleksandr', 'Natalya', 'Michael', 'Nikolay', 'Olga']

const Dialogs = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <List dense>
              {dialogItems.map(dialogName => {
                return <DialogItem icon={<PersonIcon />} name={dialogName} />
              })}
            </List>
          </Grid>
          <Grid item xs={9}>Messages list</Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Dialogs