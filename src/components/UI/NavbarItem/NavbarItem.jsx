import React from 'react'
import { ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ icon, title, link }) => {
  return (
    <NavLink to={link} style={{textDecoration: 'none', color: 'inherit'}}>
      <ListItem disablePadding dense>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText color='inherit' primary={title} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  )
}

export default NavbarItem