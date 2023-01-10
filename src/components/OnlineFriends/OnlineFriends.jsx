import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Card, Stack } from '@mui/material'
import OnlineFriendItem from '../UI/OnlineFriendItem/OnlineFriendItem'


const OnlineFriends = () => {

  const friendsList = useSelector(state => state.allUsers.allUsers)
  let onlineFriendsList = friendsList.filter(f => f.followed === true)
  let friendsRender = onlineFriendsList.map(f => {
    return <OnlineFriendItem
      key={f.id}
      icon={f.photos.small}
      name={f.name}
    />
  })

  return (
    <Card sx={{ padding: '12px', margin: '10px 0 10px 0' }}>
      <Typography sx={{ paddingBottom: '10px', color: 'Green' }} align='right'>Online friends</Typography>
      <Stack direction="row" spacing={2}>
        {onlineFriendsList.length !== 0
          ? friendsRender
          : <Typography>No online friends</Typography>
        }
      </Stack>
    </Card>
  )
}

export default OnlineFriends