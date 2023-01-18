import React from 'react'
import { Card, Typography, Box } from '@mui/material'


const SidebarItem = ({ header, info, icon }) => {
  return (
    <Card sx={{ margin: '20px 0 15px 0', padding: '10px' }}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>{header}</Typography>
        {icon}
      </Box>
      <br />
      <Typography variant='p'>{info}</Typography>
    </Card>
  )
}

export default SidebarItem