import React from 'react'
import { List } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FeedIcon from '@mui/icons-material/Feed';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import NavbarItem from '../UI/NavbarItem/NavbarItem';

const navbarItems = [
  {id: 1, title: 'Profile', icon: <PersonIcon />, path: '/profile'},
  {id: 2, title: 'News', icon: <FeedIcon />, path: '/feed'},
  {id: 3, title: 'Friends', icon: <GroupIcon />, path: '/friends'},
  {id: 4, title: 'Messages', icon: <MailIcon />, path: '/dialogs'},
  {id: 5, title: 'Music', icon: <MusicNoteIcon />, path: '/music'},
  {id: 6, title: 'Settings', icon: <SettingsIcon />, path: '/settings'}
]

const Navbar = () => {
  return (
    <nav aria-label="main mailbox folders">
    <List>
      {navbarItems.map(item => {
        return (
          <NavbarItem key={item.id} title={item.title} icon={item.icon} link={item.path}/>
        )
      })}
    </List>
  </nav>
  )
}

export default Navbar