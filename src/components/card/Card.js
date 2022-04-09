import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './card.css';
export default function ImgMediaCard(props) {
  return (
    <div className={'movies'}>
      <Card sx={{ maxWidth: 345 }} onClick={props.onClick}>
        <CardMedia
          component='img'
          alt='movie image'
          image={props.movie.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.movie.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.movie.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
