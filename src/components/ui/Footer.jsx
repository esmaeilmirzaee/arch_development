import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
    <div className={classes.footer}>
      <Typography component='h1' variant='h1' className={classes.logo}>
        The Beaver
      </Typography>
    </div>
  );
}
