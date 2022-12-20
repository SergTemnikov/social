import React from 'react'
import { List } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FeedIcon from '@mui/icons-material/Feed';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import NavbarItem from '../UI/NavbarItem/NavbarItem';

const Navbar = () => {
  return (
    <nav aria-label="main mailbox folders">
    <List>
      <NavbarItem title='Profile' icon={<PersonIcon />} link='/profile'/>
      <NavbarItem title='News' icon={<FeedIcon />} link='/feed'/>
      <NavbarItem title='Friends' icon={<GroupIcon />} link='/friends'/>
      <NavbarItem title='Messages' icon={<MailIcon />} link='/dialogs'/>
      <NavbarItem title='Music' icon={<MusicNoteIcon />} link='/music'/>
      <NavbarItem title='Settings' icon={<SettingsIcon />} link='/settings'/>
    </List>
  </nav>
  )
}

export default Navbar