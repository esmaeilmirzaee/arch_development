import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/img/logo_0_2.svg';

import { Tabs, Tab } from '@material-ui/core';
import { PhoneIcon } from '@material-ui/icons/Phone';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBotton: '6em',
  },
  logo: {
    height: '3em',
    padding: '.5em',
  },
  logoTitle: {
    fontWeight: '400',
    fontStyle: 'italic',
  },
}));

export default function Header(props) {
  const classes = useStyle();
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <img src={logo} alt="Company's logo" className={classes.logo} />
            <Typography variant='h3' className={classes.logoTitle}>
              The Beaver
            </Typography>
            <Tabs>
              <Tab label='Home' />
              <Tab label='Training' />
              <Tab label='About Me' />
              <Tab icon={<PhoneIcon />} aria-label='contact me' />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
