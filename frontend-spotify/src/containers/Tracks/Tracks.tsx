import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectTracks } from '../../features/tracks/tracksSlice.ts';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import TrackCard from '../../components/TrackCard.tsx';
import { useEffect } from 'react';
import { fetchAllTrackByAlbum } from '../../features/tracks/tracksThunk.ts';

const Tracks = () => {
  const tracks = useAppSelector(selectTracks);
  const dispatch = useAppDispatch();
  const params = new URLSearchParams(document.location.search);
  const tracksId = params.get('album');

  useEffect(() => {
    if (tracksId) {
      dispatch(fetchAllTrackByAlbum(tracksId));
    }
  }, [dispatch, tracksId]);

  return (
    <div>
      <Box sx={{padding: 2}}>
        <Typography variant="h4" sx={{marginBottom: 2}}>
         Tracks
        </Typography>
        <hr/>
        <h3 className="mb-2">
        </h3>
        {tracks.length === 0 ? (
          <Typography>No tracks found</Typography>
        ) : (
          <Grid container spacing={2}>
            {tracks.map((track) => (
              <Grid size={{xs: 6, md: 4}} key={track._id}>
                <TrackCard
                  track={track}
                  key={track._id}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default Tracks;