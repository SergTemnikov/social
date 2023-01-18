import React from 'react'
import { Avatar, Box, List, Paper, Stack, Typography } from '@mui/material'
import MockAvatar from './../../../img/MockAvatar.jpg'
import ContactLink from '../../UI/ContactLink/ContactLink'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PublicIcon from '@mui/icons-material/Public'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkIcon from '@mui/icons-material/Link'
import VkIcon from '../../UI/VkIcon'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const ProfileInfo = ({ profile }) => {
  const { aboutMe,
    fullName,
    photos,
    lookingForAJob,
    lookingForAJobDescription,
    contacts } = profile

  const { github,
    vk,
    facebook,
    instagram,
    twitter,
    website,
    youtube,
    mainLink } = contacts

  return (
    <Paper sx={{ padding: '10px' }}>
      <Stack direction='row' sx={{}}>
        <Box>
          <Avatar
            src={photos.large || MockAvatar}
            sx={{ width: 150, height: 150, margin: '0 20px 0 0' }}
            alt='Avatar'
          />
          <Typography style={{ color: '#20df20', fontWeight: 'bold' }}>Online</Typography>
        </Box>
        <Box>
          <Typography variant='h5'>{fullName}</Typography>
          <Typography>{aboutMe}</Typography>
          {lookingForAJob
            ? <Box>
              <Stack direction='row' alignItems='center'>
                <Typography variant='caption' color='primary'>
                  Job hunt
                </Typography>
                <ArrowDropDownIcon color='primary' />
              </Stack>
              <Typography>
                {lookingForAJobDescription}
              </Typography>
            </Box>
            : <Typography>Doesn't looks for a Job!</Typography>
          }

          {contacts
            ? <Box>
              <Stack direction='row' alignItems='center'>
                <Typography variant='caption' color='primary'>
                  Contacts
                </Typography>
                <ArrowDropDownIcon color='primary' />
              </Stack>
              <List dense>
                {github ? <ContactLink title={github} icon={<GitHubIcon />} /> : null}
                {vk ? <ContactLink title={vk} icon={<VkIcon />} /> : null}
                {facebook ? <ContactLink title={facebook} icon={<FacebookIcon color='primary'/>} /> : null}
                {instagram ? <ContactLink title={instagram} icon={<InstagramIcon color='warning'/>} /> : null}
                {twitter ? <ContactLink title={twitter} icon={<TwitterIcon color='info'/>} /> : null}
                {website ? <ContactLink title={website} icon={<PublicIcon />} /> : null}
                {youtube ? <ContactLink title={youtube} icon={<YouTubeIcon color='error'/>} /> : null}
                {mainLink ? <ContactLink title={mainLink} icon={<LinkIcon />} /> : null}
              </List>
            </Box>
            : <Typography variant='caption' color='GrayText'>No contacts</Typography>
          }
        </Box>
      </Stack>
    </Paper>
  )
}

export default ProfileInfo