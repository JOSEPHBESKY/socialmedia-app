import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography,Box, InputBase,Badge, Avatar,Menu,MenuItem } from '@mui/material'
import React,{useState} from 'react'
import{ Pets,Mail, Notifications} from '@mui/icons-material';
const Navbar = () => {
  const [open,setopen]=useState(false)
  const StyleToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
  })
  const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    width:"40%",
    borderRadius:'8px'   
  }))
    const Icons=styled(Box)(({theme})=>({display:'flex',gap:"20PX",alignItems:'center',  breakpoints:{
    display:'flex'},
    }))
    const Userbox=styled(Box)(({theme})=>({display:'flex',gap:"20PX",alignItems:'center',  breakpoints:{
      display:'flex'},
  }))
  return (
   <AppBar position='sticky'>
   <StyleToolbar><Typography varient="h6" sx={{display:{xs:'none',sm:'block'}}}>fbinsta</Typography>
   <Pets sx={{display:{xs:'block',sm:'none'}}}/>
   <Search><InputBase placeholder='search'></InputBase></Search>
   <Icons>
   <Badge badgeContent={4} color="error">
   <Mail/>
   </Badge>
   <Badge badgeContent={4} color="error">
   <Notifications/>
   </Badge>
   </Icons>
   <Userbox onClick={e=>setopen(true)}>
   <Avatar sx={{width:"40px",height:"30px"}} src='' onClick={e=>setopen(true)}/>
   <Typography variant='span'>Joseph</Typography>
   </Userbox>
   </StyleToolbar>
   <Menu
   id="demo-positioned-menu"
   aria-labelledby="demo-positioned-button"
      open={open}
      onClose={e=>setopen(false)}
   anchorOrigin={{
     vertical: 'top',
     horizontal: 'right',
   }}
   transformOrigin={{
     vertical: 'top',
     horizontal: 'right',
   }}
 >
   <MenuItem >Profile</MenuItem>
   <MenuItem >My account</MenuItem>
   <MenuItem>Logout</MenuItem>
 </Menu>
   </AppBar>
  )
}

export default Navbar