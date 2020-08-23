import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.lightBlue,
    width: '100%',
  },
}));

export default function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <Typography>The Beaver</Typography>
    </div>
  );
}
