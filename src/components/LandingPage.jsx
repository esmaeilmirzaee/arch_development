import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { FaHandHoldingHeart } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <Grid container direction='column' lg>
      <Grid item>
        <Typography variant='h1'>
          Develop and program frontend and backend.
        </Typography>
        <Typography>
          <span>
            And give <FaHandHoldingHeart /> to software applications.
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
}
