import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.darkBlue,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  logo: {
    padding: '3rem',
    color: theme.palette.common.darkCream,
  },
}));

export default function Footer() {
  const classes = useStyle();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs>
        <Typography component='h6' variant='h3' className={classes.logo}>
          The Beaver
        </Typography>
      </Grid>
      <Grid container item direction='column' xs>
        <Grid item>Training</Grid>
        <Grid item>Frontend development</Grid>
        <Grid item>Backend development</Grid>
        <Grid item>DevOps</Grid>
      </Grid>
    </Grid>
  );
}
