import React from 'react'
import { useSelector } from 'react-redux'
import SidebarItem from '../UI/SidebarItem/SidebarItem'
import AccessibilityNewTwoToneIcon from '@mui/icons-material/AccessibilityNewTwoTone'

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
    <div>
      {adsList}
    </div>
  )
}

export default Siderbar