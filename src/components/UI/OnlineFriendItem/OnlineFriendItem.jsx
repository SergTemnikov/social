import React from 'react'
import { Typography, Badge, Avatar, Stack } from '@mui/material'
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
  }
}))

const limitStr = (str, n, symb) => {
  if (!n && !symb) return str;
  symb = symb || '...';
  return str.substr(0, n - symb.length) + symb
}

const OnlineFriendItem = ({ icon, name }) => {
  return (
    <Stack direction='column'>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={icon ? icon : MockAvatar} />
      </StyledBadge>
      <Typography variant='caption' noWrap>{limitStr(name, 7)}</Typography>
    </Stack>
  )
}

export default OnlineFriendItem