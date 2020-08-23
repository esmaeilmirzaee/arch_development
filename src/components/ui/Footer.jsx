import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => {
  footer: {
    backgroundColor: theme.palette.common.main;
    width: '100%';
  }
});

export default function Footer() {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <Typography>The Beaver</Typography>
    </div>
  );
}
