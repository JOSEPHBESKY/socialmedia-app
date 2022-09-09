import React from 'react'
import { Box, Typography,AvatarGroup,Avatar,ImageList,ImageListItem} from '@mui/material'
import itemData from './itemData.json'
const Rightbar = () => {
  return (
    <Box  flex={2} p={2}sx={{display:{xs:'none',sm:'block'}}}>
    <Box position="fixed">
    <Typography variant="h6" fontWeight={100}>online friend</Typography>
    <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />\
  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100}>latest photos</Typography>
<ImageList gap={5} cols={3} rowHeight={100}>
{itemData.map((item) => (
  <ImageListItem key={item.img}>
    <img
      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={item.title}
      loading="lazy"
    />
  </ImageListItem>
))}
</ImageList>
    </Box>
    </Box>
  )
}

export default Rightbar