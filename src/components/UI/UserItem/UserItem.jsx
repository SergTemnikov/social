import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
// import PersonIcon from '@mui/icons-material/Person'

const UserItem = ({ users, followUser, unfollowUser }) => {
  return (
    <>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <ListItem key={user.id}>
                <ListItemAvatar>
                  <Avatar src={user.photos.small} />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={user.status}
                />
                {
                  user.followed
                    ? <Button
                      variant='contained'
                      color='error'
                      onClick={() => unfollowUser(user.id)}
                      endIcon={<RemoveIcon />}>
                      Remove
                    </Button>
                    : <Button
                      variant='contained'
                      color='success'
                      sx={{display: 'flex', alignItems: 'center'}}
                      onClick={() => followUser(user.id)}
                      endIcon={<AddIcon />}>
                      Add 
                    </Button>
                }
              </ListItem>
              <Divider />
            </div>
          )
        })
      }
    </>
  )
}

export default UserItem