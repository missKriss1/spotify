import { Artists } from '../types';
import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import zaglushka from '/src/assets/zaglushka.jpg';
import { apiUrl } from '../globalConstants.ts';
import { Link } from 'react-router-dom';

interface Props{
  artist: Artists;
}
const ArtistCard: React.FC<Props> = ({artist}) => {

  let imageZaglushka = zaglushka;

  if (artist.image) {
    imageZaglushka = `${apiUrl}/${artist.image}`;
  }
  return (
    <div>
      <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardMedia
          component="img"
          sx={{
            width: 350,
            height:350,
            objectFit: 'cover',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
          image={imageZaglushka}
          alt={artist.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {artist.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            component={Link}
            to={`/artists/${artist._id}/albums`}
            variant="contained"
            color="primary"
          >
            Go to album
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ArtistCard;