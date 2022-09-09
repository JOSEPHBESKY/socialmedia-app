import React from 'react'
import {AccountBoxRounded, Diversity3, Home,LocalGroceryStore,MenuBook,ModeNight,PersonAdd,Settings}from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
const Sidebar = ({mode,setmode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:'none',sm:'block'}}}>
    <Box position="fixed">
    <List><ListItem disablePadding><ListItemButton component="a" href='#home'><ListItemIcon><Home /></ListItemIcon><ListItemText primary="Homepage"/></ListItemButton></ListItem>
    <ListItem disablePadding><ListItemButton component="a" href='#simple-list'><ListItemIcon><MenuBook/></ListItemIcon><ListItemText primary="Pages"/></ListItemButton></ListItem>
    <ListItem disablePadding><ListItemButton component="a" href='#simple-list'><ListItemIcon><Diversity3/></ListItemIcon><ListItemText primary="Group"/></ListItemButton></ListItem>
    <ListItem disablePadding><ListItemButton component="a" href='#simple-list'><ListItemIcon><LocalGroceryStore/></ListItemIcon><ListItemText primary="Marketplace"/></ListItemButton></ListItem>
    <ListItem disablePadding><ListItemButton component="a" href='#simple-list'><ListItemIcon><Settings/></ListItemIcon><ListItemText primary="Settings"/></ListItemButton></ListItem>
    <ListItem disablePadding><ListItemButton component="a" href='#simple-list'><ListItemIcon><PersonAdd/></ListItemIcon><ListItemText primary="Friends"/></ListItemButton></ListItem>
    <ListItem disablePadding><ListItemButton component="a" href='#simple-list'><ListItemIcon><AccountBoxRounded/></ListItemIcon><ListItemText primary="Profile"/></ListItemButton></ListItem>
   <ListItem disablePadding><ListItemButton component="a" href='#simple-list'><ListItemIcon><ModeNight/></ListItemIcon><Switch onClick={e=>setmode(mode==="light"?"dark":"light")}/></ListItemButton></ListItem>
    </List>
    </Box>
    </Box>
    )
}

export default Sidebar