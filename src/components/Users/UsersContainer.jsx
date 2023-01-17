import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  follow,
  setAllUsers,
  setCurrentPage,
  setTotalUsersCount,
  unfollow,
  toggleIsFetching
} from '../../redux/allUsersSlice'
import Users from './Users'
import Loader from '../UI/Loader/Loader'
import { Box } from '@mui/material'

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(res => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(res.data.items)
          this.props.setUsersCount(res.data.totalCount)
        })
    }
  }

  onPageChanged = (_, value) => {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${value}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(res.data.items)
      })
    this.props.setPage(value)
  }

  render() {
    return (
      <Box>
        {this.props.isFetching
          ? <Loader />
          : <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
          />
        }
      </Box>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.allUsers.allUsers,
    pageSize: state.allUsers.pageSize,
    totalUsersCount: state.allUsers.totalUsersCount,
    currentPage: state.allUsers.currentPage,
    isFetching: state.allUsers.isFetching
  }
}

export default connect(mapStateToProps, {
  followUser: follow,
  unfollowUser: unfollow,
  setUsers: setAllUsers,
  setUsersCount: setTotalUsersCount,
  setPage: setCurrentPage,
  toggleIsFetching: toggleIsFetching
})(UsersContainer)