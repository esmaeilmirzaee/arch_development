import React from 'react';
import { Grid, Typography } from '@material-ui/core/';

export default function LandingPage() {
  return (
    <Grid container direction='column' lg>
      <Grid item>
        <Typography variant='h1'>
          Develop and program frontend and backend.
        </Typography>
      </Grid>
    </Grid>
  );
}
