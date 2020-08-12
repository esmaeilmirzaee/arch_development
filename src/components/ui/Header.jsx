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

import Button from '@material-ui/core/Button';
import BrightnessLight from '@material-ui/icons/BrightnessMedium';
import BrightnessDark from '@material-ui/icons/Brightness7';

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
    textColor: 'white',
  },
  tab: {
    ...theme.typography.tab,
    color: 'white',
    minWidth: 10,
    marginLeft: '1.5rem',
    textColor: 'white',
  },
  button: {
    color: '#fdfdfd',
    // marginBottom: '2rem',
  },
}));

export default function Header(props) {
  const classes = useStyle();
  const currentTheme = true;
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
                // icon={<HomeIcon />}
                color={'#fff'}
                label='Home'
                aria-label='home'
              />
              <Tab
                className={classes.tab}
                // icon={<SchoolIcon />}
                label='Training'
                aria-label='training'
              />
              <Tab
                className={classes.tab}
                // icon={<WorkIcon />}
                label='About Me'
                aria-label='resume'
              />
              <Tab
                className={classes.tab}
                // icon={<ContactsIcon />}
                label='Contact Me'
                aria-label='contact me'
              />
            </Tabs>
            <Button className={classes.button}>
              {currentTheme ? <BrightnessDark /> : <BrightnessLight />}
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
