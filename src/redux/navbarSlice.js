import { createSlice } from '@reduxjs/toolkit'
import PersonIcon from '@mui/icons-material/Person'
import FeedIcon from '@mui/icons-material/Feed'
import MailIcon from '@mui/icons-material/Mail'
import GroupIcon from '@mui/icons-material/Group'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import SettingsIcon from '@mui/icons-material/Settings'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

const initialState = {
  navbarItems: [
    {id: 1, title: 'Profile', icon: <PersonIcon />, path: '/profile'},
    {id: 2, title: 'News', icon: <FeedIcon />, path: '/feed'},
    {id: 3, title: 'Friends', icon: <GroupIcon />, path: '/friends'},
    {id: 4, title: 'Messages', icon: <MailIcon />, path: '/dialogs'},
    {id: 5, title: 'Music', icon: <MusicNoteIcon />, path: '/music'},
    {id: 6, title: 'Settings', icon: <SettingsIcon />, path: '/settings'},
    {id: 7, title: 'All Users', icon: <PeopleOutlineIcon />, path: '/users'}
  ]
}

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    default: (state) => {return state}
  }
})

export default navbarSlice.reducer