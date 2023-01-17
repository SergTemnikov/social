import {
  follow,
  setAllUsers,
  setCurrentPage,
  setTotalUsersCount,
  unfollow
} from '../../redux/allUsersSlice'
import UsersAPI from './UsersAPI'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    users: state.allUsers.allUsers,
    pageSize: state.allUsers.pageSize,
    totalUsersCount: state.allUsers.totalUsersCount,
    currentPage: state.allUsers.currentPage
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)

export default UsersContainer