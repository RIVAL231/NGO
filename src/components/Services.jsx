import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Services(props) {
    const cardStyle = {
        margin: '20px',
        background: 'rgba(255, 255, 255, 0.25)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(11.5px)',
        WebkitBackdropFilter: 'blur(11.5px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        width:'600px'
      };
  return (
    <Card sx={{ maxWidth: 300 }} style={cardStyle} className='card1'>
      <CardMedia
        sx={{ height: 300 }}
        image={props.img}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.t1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.t2}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
