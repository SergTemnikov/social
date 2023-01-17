import React from "react"
import Users from "./Users"
import axios from "axios"

class UsersAPI extends React.Component {
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
      <Users 
        users={this.props.users}
        currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        onPageChanged={this.onPageChanged}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
      />
    )
  }
}

export default UsersAPI