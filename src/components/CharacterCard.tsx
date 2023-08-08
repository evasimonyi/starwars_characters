import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CharacterType } from './Character.interface';
import { grey } from '@mui/material/colors';

const CharacterCard = (props: { character: CharacterType, image: string }) => {
  const { character, image } = props;
  return (
    <Card
      sx={{
        p: '1em',
        backgroundColor: grey[800]
      }}
    >
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