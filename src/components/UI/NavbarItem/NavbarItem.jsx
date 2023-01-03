import React from 'react'
import { ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

let activeStyle = {
  color: "#0288d1"
}

const NavbarItem = ({ icon, title, link }) => {
  return (
    <NavLink
      to={link}
      style={({ isActive }) => isActive ? activeStyle : undefined}
    >
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