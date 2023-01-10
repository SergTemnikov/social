import React from 'react'
import { useSelector } from 'react-redux'
import SidebarItem from '../UI/SidebarItem/SidebarItem'
import AccessibilityNewTwoToneIcon from '@mui/icons-material/AccessibilityNewTwoTone'
import SidebarFriends from '../OnlineFriends/OnlineFriends'

const Siderbar = () => {

  const ads = useSelector(state => state.sidebar.adList)

  const adsList = ads.map(ad => {
    return <SidebarItem
      key={ad.id}
      header={ad.header}
      info={ad.adInfo}
      icon={<AccessibilityNewTwoToneIcon />} />
  })

  return (
    <>
      <SidebarFriends />
      {adsList}
    </>
  )
}

export default Siderbar