import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.lightBlue,
    width: '100%',
    position: 'relative',
    bottom: '0',
    left: '0',
  },
  logo: {
    padding: '3rem',
  },
}));

export default function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <Typography className={classes.logo}>The Beaver</Typography>
    </div>
  );
}
