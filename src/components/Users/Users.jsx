import React, { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../API/API-config'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/allUsersSlice'
import { List, Pagination, Stack } from '@mui/material'
import { follow, unfollow, setAllUsers } from '../../redux/allUsersSlice'
import UserItem from '../UI/UserItem/UserItem'
import Loader from './../UI/Loader/Loader'

const Users = () => {
  const pageSize = useSelector(state => state.allUsers.pageSize)
  const totalUsersCount = useSelector(state => state.allUsers.totalUsersCount)
  const currentPage = useSelector(state => state.allUsers.currentPage)
  const users = useSelector(state => state.allUsers.allUsers)
  const isFetching = useSelector(state => state.allUsers.isFetching)
  const dispatch = useDispatch()

  const followUser = (userId) => {
    dispatch(follow(userId))
  }

  const unfollowUser = (userId) => {
    dispatch(unfollow(userId))
  }

  const onPageChanged = (_, value) => {
    axios.get(`${BASE_URL}/users?page=${value}&count=${pageSize}`)
      .then(res => {
        dispatch(setAllUsers(res.data.items))
      })
    dispatch(setCurrentPage(value))
  }

  useEffect(
    () => {
      if (users.length === 0) {
        dispatch(toggleIsFetching(true))
        axios.get(`${BASE_URL}/users?page=${currentPage}&count=${pageSize}`)
          .then(res => {
            dispatch(toggleIsFetching(false))
            dispatch(setAllUsers(res.data.items))
            dispatch(setTotalUsersCount(res.data.totalCount))
          })
      }
    }, [currentPage])

  return (
    <>
      {isFetching
        ? <Loader />
        : <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {users.map(user => {
            return <UserItem
              key={user.id}
              user={user}
              followUser={followUser}
              unfollowUser={unfollowUser} />
          })}
        </List>
      }
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