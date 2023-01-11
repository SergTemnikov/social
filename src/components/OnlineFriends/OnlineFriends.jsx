import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Typography, Card, Stack } from '@mui/material'
import OnlineFriendItem from '../UI/OnlineFriendItem/OnlineFriendItem'


const OnlineFriends = () => {
  const [onlineCount, setOnlineCount] = useState(0)

  const friendsList = useSelector(state => state.allUsers.allUsers)
  let onlineFriendsList = friendsList.filter(f => f.followed === true)

  let friendsRender = onlineFriendsList.map(f => {
    return <OnlineFriendItem
      key={f.id}
      icon={f.photos.small}
      name={f.name}
    />
  })

  useEffect(() => {
    setOnlineCount(onlineFriendsList.length)
  }, [onlineFriendsList.length])

  return (
    <Card sx={{ padding: '12px', margin: '10px 0 10px 0' }}>
      <Typography sx={{ paddingBottom: '10px', color: 'Green' }} align='right'>Online friends ({String(onlineCount)})</Typography>
      <Stack direction="row" spacing={2} sx={{ display: 'flex', gap: '0 10px', justifyContent: 'center' }}>
        {onlineFriendsList.length !== 0
          ? friendsRender
          : <Typography>No online friends</Typography>
        }
      </Stack>
    </Card>
  )
}

export default OnlineFriends