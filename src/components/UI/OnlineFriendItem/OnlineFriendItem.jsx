import React from 'react'
import { Box, Typography, Badge, Avatar, Stack, AvatarGroup } from '@mui/material'
import { styled } from '@mui/material/styles'
import MockAvatar from './../../../img/MockAvatar.jpg'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

const OnlineFriendItem = ({ icon, name }) => {
  return (
    <Box sx={{ margin: '12px 0 12px 0' }}>
      <AvatarGroup max={3}>
        <Box sx={{ textAlign: 'center' }}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={icon ? icon : MockAvatar} />
          </StyledBadge>
          <Typography variant="caption" display="block" sx={{ paddingTop: '4px', textOverflow: 'ellipsis' }}>
            {name}
          </Typography>
        </Box>
      </AvatarGroup>
    </Box>
  )
}

export default OnlineFriendItem