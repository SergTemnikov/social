import React, { useEffect } from 'react'
import Users from './Users'
import axios from 'axios'
import { BASE_URL } from '../API/API-config'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/allUsersSlice'
import { follow, unfollow, setAllUsers } from '../../redux/allUsersSlice'

const UsersContainer = () => {

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
    }, [currentPage, users.length, pageSize, dispatch])

  return (
    <Users 
    users={users}
    totalUsersCount={totalUsersCount}
    currentPage={currentPage}
    isFetching={isFetching}
    followUser={followUser}
    unfollowUser={unfollowUser}
    onPageChanged={onPageChanged}
    />
  )
}

export default UsersContainer