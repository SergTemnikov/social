import React from 'react'
import NavbarItem from '../UI/NavbarItem/NavbarItem'
import { useSelector } from 'react-redux';
import Navbar from './Navbar';

const NavbarContainer = () => {

  const navbarItems = useSelector(state => state.navbar.navbarItems)
  const navbarItemsList = navbarItems.map(item => {
    return (
      <NavbarItem key={item.id} title={item.title} icon={item.icon} link={item.path} />
    )
  })

  return <><Navbar navbarItems={navbarItemsList} /></>
}

export default NavbarContainer