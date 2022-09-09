import React from 'react'
import{Favorite,Share,MoreVert,FavoriteBorder } from '@mui/icons-material';
import {Card,Typography,CardHeader,Avatar,Checkbox,CardMedia, CardContent,CardActions,IconButton,} from '@mui/material'
const Post = () => {
  return (
 
    <Card sx={{ maxWidth:600 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor:'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?cs=srgb&dl=pexels-jonathan-petersson-1237119.jpg&fm=jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
     
    </Card>
  )
}
export default Post;