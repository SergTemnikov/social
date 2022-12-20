import React from 'react'
import { ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';

const NavbarItem = ({icon, title}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  )
}

export default NavbarItem