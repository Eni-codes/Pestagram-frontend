import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Post= (props) => {


//   let update_likes = () => {

//     fetch("http://localhost:3000/", {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ likes: likes + 1 })
//     })
//         .then(response => response.json())
//         .then(console.log)

// }
 
  // console.log(props.posts)

  const caption = props.posts.caption 
  const pet = props.posts.pet 
  const comment = props.posts.comments[0].content
  // const photo = props.posts.photos[0].image
  const likes = props.posts.likes
 
  const classes = useStyles();
 

  return (
   
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={pet}
        subheader={caption}
        />
      <CardMedia
        className={classes.media}

        //image={photo}
        title={null}
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {comment}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label={likes}> 
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}