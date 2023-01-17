import axios from "axios"
import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { BASE_URL } from './../API/API-config'
import { setProfile } from "../../redux/profileSlice"
import { toggleIsFetching } from "../../redux/allUsersSlice"
import Loader from './../UI/Loader/Loader'

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`${BASE_URL}/profile/2`)
      .then(res => {
        this.props.toggleIsFetching(false)
        this.props.setProfile(res.data)
      })
  }

  render() {
    return (
      <>
        {!this.props.profile
          ? <Loader />
          : <Profile
            {...this.props}
            profile={this.props.profile}
          />
        }

      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profilePage.profile,
    isFetching: state.allUsers.isFetching
  }
}

export default connect(mapStateToProps, {
  setProfile,
  toggleIsFetching
})(ProfileContainer) 