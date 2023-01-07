import React from 'react'
import { List } from '@mui/material'

const Navbar = ({ navbarItems }) => {
  return (
    <nav aria-label="main mailbox folders">
      <List>
        {navbarItems}
      </List>
    </nav>
  )
}

export default Navbar