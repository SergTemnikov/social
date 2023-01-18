import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import { BASE_URL } from './../API/API-config'
import { toggleIsFetching } from './../../redux/allUsersSlice'
import { setProfile } from '../../redux/profileSlice'
import Loader from './../UI/Loader/Loader'

const ProfileContainer = () => {
  const dispatch = useDispatch()

  const profile = useSelector(state => state.profile.profilePage.profile)

  useEffect(() => {
    dispatch(toggleIsFetching(true))
    axios.get(`${BASE_URL}/profile/2`).then(res => {
      dispatch(toggleIsFetching(false))
      dispatch(setProfile(res.data))
    })
  })

  return (
    <>
      {
        !profile
          ? <Loader />
          : <Profile profile={profile} />
      }
    </>
  )
}

export default ProfileContainer