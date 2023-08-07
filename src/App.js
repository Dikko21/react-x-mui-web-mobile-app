import React from 'react'
import { Box, Container, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Restore, Favorite, LocationOn, Folder } from '@mui/icons-material'

export default function App() {
  return (
    <Box sx={{
      minHeight: '100vh',
      maxWidth: '700px',
      margin: 'auto',
      background: 'white',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Container maxWidth='sm' sx={{ paddingTop: '50px', paddingBottom: '70px' }}>
        <Box sx={{ fontSize: '48px', fontWeight: 'bold' }}>
          Content Here
        </Box>
      </Container>
      <Box sx={{ marginTop: 'auto' }}>
        <BottomNavigation sx={{ background: 'lightskyblue' }}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<Restore />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<Favorite />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOn />}
          />
          <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
        </BottomNavigation>
      </Box>
    </Box>
  )
}
