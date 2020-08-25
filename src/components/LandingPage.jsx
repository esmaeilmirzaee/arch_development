import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { FaHandHoldingHeart } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <Grid container direction='column' lg>
      <Grid item>
        <Grid container direction='column' alignItems='center' md>
          <Grid item md={6}>
            <Typography variant='h3'>Frontend & Backend</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography>
              <span>
                And give <FaHandHoldingHeart /> to software applications.
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
