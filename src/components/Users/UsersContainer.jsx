import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  follow,
  setAllUsers,
  setCurrentPage,
  setTotalUsersCount,
  unfollow
} from '../../redux/allUsersSlice'
import Users from './Users'
import Loader from '../UI/Loader/Loader'

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(res => {
          this.props.setUsers(res.data.items)
          this.props.setUsersCount(res.data.totalCount)
        })
    }
  }

  onPageChanged = (_, value) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${value}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
      })
    this.props.setPage(value)
  }

  render() {

    return (
      <>
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

      </>

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

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => dispatch(follow(userId)),
    unfollowUser: (userId) => dispatch(unfollow(userId)),
    setUsers: (allUsers) => dispatch(setAllUsers(allUsers)),
    setUsersCount: (totalUsers) => dispatch(setTotalUsersCount(totalUsers)),
    setPage: (page) => dispatch(setCurrentPage(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)