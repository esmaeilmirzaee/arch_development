import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/img/logo_0_2.svg';

import { Tabs, Tab } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';

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
  tabsContainer: {
    marginLeft: 'auto',
  },
  tab: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Playfair Display',
    fontWeight: 400,
    fontSize: '1rem',
    minWidth: 10,
    marginLeft: '1.5rem',
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
            <Typography variant='h5' className={classes.logoTitle}>
              The Beaver
            </Typography>
            <Tabs className={classes.tabsContainer}>
              <Tab
                className={classes.tab}
                icon={<HomeIcon />}
                label='Home'
                aria-label='home'
              />
              <Tab
                className={classes.tab}
                icon={<SchoolIcon />}
                label='Training'
                aria-label='training'
              />
              <Tab
                className={classes.tab}
                icon={<WorkIcon />}
                label='About Me'
                aria-label='resume'
              />
              <Tab
                className={classes.tab}
                icon={<ContactsIcon />}
                label='Contact Me'
                aria-label='contact me'
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
