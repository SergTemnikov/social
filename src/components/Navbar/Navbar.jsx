import React from 'react'
import { List } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FeedIcon from '@mui/icons-material/Feed';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsIcon from '@mui/icons-material/Settings';
import NavbarItem from '../../UI/NavbarItem/NavbarItem';

const Navbar = () => {
  return (
    <nav aria-label="main mailbox folders">
    <List>
      <NavbarItem title='Profile' icon={<PersonIcon />}/>
      <NavbarItem title='News' icon={<FeedIcon />}/>
      <NavbarItem title='Friends' icon={<GroupIcon />}/>
      <NavbarItem title='Messages' icon={<MailIcon />}/>
      <NavbarItem title='Music' icon={<MusicNoteIcon />}/>
      <NavbarItem title='Settings' icon={<SettingsIcon />}/>
    </List>
  </nav>
  )
}

export default Navbar