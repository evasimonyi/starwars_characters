import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CharacterType } from './Character.interface';

const CharacterCard = (props: { character: CharacterType, image: string }) => {
  const { character, image } = props;
  return (
    <Card sx={{ p: '1em' }}>
      <CardMedia
        sx={{
          minHeight: 300,
          minWidth: 300,
          img: {
            objectFit: 'contain',
          }
        }}
        image={image}
        title={character.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textAlign: 'center'
          }}>
          {character.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;