import React from 'react'
import { List, Pagination, Stack } from '@mui/material'
import UserItem from '../UI/UserItem/UserItem'

const Users = ({ users,
  currentPage,
  totalUsersCount,
  onPageChanged,
  followUser,
  unfollowUser }) => {

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {users.map(user => {
          return <UserItem
            key={user.id}
            user={user}
            followUser={followUser}
            unfollowUser={unfollowUser} />
        })}
      </List>
      <Stack>
        <Pagination
          count={totalUsersCount}
          variant="outlined"
          shape="rounded"
          defaultPage={1}
          page={currentPage}
          onChange={onPageChanged}
          sx={{ marginY: 2, marginX: 'auto' }} />
      </Stack>
    </>
  )
}

export default Users