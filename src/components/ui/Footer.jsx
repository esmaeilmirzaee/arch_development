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
  link: {
    color: '#fefefe',
  },
}));

export default function Footer() {
  const classes = useStyle();
  return (
    <Grid container className={classes.footer} spacing={2}>
      <Grid item xs>
        <Typography component='h6' variant='h3' className={classes.logo}>
          The Beaver
        </Typography>
      </Grid>

      <Grid container item direction='column' xs spacing={2}>
        <Grid item className={classes.link}>
          Training
        </Grid>
        <Grid item className={classes.link}>
          Frontend development
        </Grid>
        <Grid item className={classes.link}>
          Backend development
        </Grid>
        <Grid item className={classes.link}>
          DevOps
        </Grid>
      </Grid>
      <Grid container item direction='column' xs spacing={2}>
        <Grid item>
          <Typography variant='body2' className={classes.link}>
            About Me
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' className={classes.link}>
            Hire Me
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
