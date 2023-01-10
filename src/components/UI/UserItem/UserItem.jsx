import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import MockAvatar from '../../../img/MockAvatar.jpg'

const UserItem = ({ user, followUser, unfollowUser }) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={user.photos.small ? user.photos.small : MockAvatar} />
        </ListItemAvatar>
        <ListItemText
          primary={user.name}
          secondary={user.status ? user.status : 'Samuraj JS'} />
        {user.followed
          ? <Button
            variant='contained'
            color='error'
            size='small'
            onClick={() => unfollowUser(user.id)}
            endIcon={<RemoveIcon />}>
            Remove
          </Button>
          : <Button
            variant='contained'
            color='success'
            size='small'
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={() => followUser(user.id)}
            endIcon={<AddIcon />}>
            Add
          </Button>}
      </ListItem>
      <Divider />
    </>
  )
}



export default UserItem