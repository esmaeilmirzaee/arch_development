import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/img/logo_0_2.svg';

import { Tabs, Tab } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Button from '@material-ui/core/Button';
import PaletteIcon from '@material-ui/icons/Palette';

import { Link } from 'react-router-dom';

// Enabling menus for academy
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useTheme } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ElevationScroll(props) {
  const { children } = props;

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
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  logo: {
    height: '3em',
    padding: '.5em',
    [theme.breakpoints.down('md')]: {
      height: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '1.5em',
    },
  },
  logoTitle: {
    fontWeight: '400',
    fontStyle: 'italic',
    color: 'white',
    textTransform: 'none',
  },
  tabsContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    color: 'white',
    minWidth: 10,
    marginLeft: '1.5rem',
  },
  button: {
    color: '#fdfdfd',
    // marginBottom: '2rem',
  },
  menu: {
    backgroundColor: theme.palette.common.darkBlue,
    color: 'white',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '3rem',
    width: '3rem',
    color: 'white',
  },
  drawer: {
    backgroundColor: theme.palette.common.darkBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerLogo: {},
}));

export default function Header(props) {
  const classes = useStyle();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null); // Open or close MenuItem
  const [open, setOpenMenu] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElTheme, setAnchorElTheme] = useState(null);
  const [openTheme, setOpenTheme] = useState(false);

  const handleActiveTab = (e, newValue) => {
    props.setValue(newValue);
  };

  // handle click on menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (id) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleThemeClick = (e) => {
    setAnchorElTheme(e.currentTarget);
    setOpenTheme(true);
  };

  const handleThemeClose = () => {
    setAnchorElTheme(null);
    setOpenTheme(false);
  };

  const trainingMenuItemOptions = [
    {
      name: 'Training',
      link: '/training',
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: '⎩  Frontend development',
      link: '/trainging/frontend_development',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: '⎩  Backend development',
      link: '/training/backend_development',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: '⎩  DevOps',
      link: '/training/devops',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    { name: 'Training', link: '/training', activeIndex: 1 },
    {
      name: 'Frontend development',
      link: '/training/frontend_development',
      activeIndex: 2,
    },
    {
      name: 'Backend development',
      link: '/training/backend_development',
      activeIndex: 3,
    },
    { name: 'DevOps', link: '/training/devops', activeIndex: 4 },
    { name: 'About', link: '/about', activeIndex: 5 },
    { name: 'Hire ME', link: '/hire_me', activeIndex: 6 },
  ];

  // TODO: it's incomplete
  // FIXME
  useEffect(() => {
    [...trainingMenuItemOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `route.link`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [
    props.value,
    trainingMenuItemOptions,
    props.selectedIndex,
    routes,
    props,
  ]);

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabsContainer}
        textColor='secondary'
        value={props.value}
        onChange={handleActiveTab}
      >
        <Tab
          className={classes.tab}
          // icon={<HomeIcon />}
          color={'#fff'}
          label='Home'
          aria-label='home'
          component={Link}
          to='/'
        />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined} // menu
          aria-haspopup={anchorEl ? true : undefined} // menu
          className={classes.tab}
          // icon={<SchoolIcon />}
          label='Training   ▿'
          aria-label='training'
          component={Link}
          to='/training'
          onMouseOver={(event) => handleClick(event)} // menu
        />
        <Tab
          className={classes.tab}
          // icon={<WorkIcon />}
          label='About Me'
          aria-label='Curriculm Vittae'
          component={Link}
          to='/about'
        />
        <Tab
          className={classes.tab}
          // icon={<ContactsIcon />}
          label='Hire Me'
          aria-label='hire me'
          component={Link}
          to='/hire_me'
        />
      </Tabs>
      <Button
        className={classes.button}
        aria-owns={anchorElTheme ? 'theme-menu' : undefined}
        aria-haspopup={anchorElTheme ? true : undefined}
        onClick={(event) => handleThemeClick(event)}
      >
        <PaletteIcon />
      </Button>
      {/* Training Menu */}
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ onMouseLeave: handleClose }} // closing menu
        style={{ transformOrigin: 'bottom' }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {trainingMenuItemOptions.map((option, id) => (
          <MenuItem
            key={id}
            classes={{ root: classes.menuItem }}
            onClick={() => {
              handleClose();
              props.setValue(1);
              handleMenuItemClick(id);
            }}
            selected={id === props.selectedIndex && props.value === 1}
            component={Link}
            to={option.link}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
      {/* Colour theme selection menu */}
      <Menu
        id='theme-menu'
        anchorEl={anchorElTheme}
        open={openTheme}
        onClose={handleThemeClose}
        style={{ marginRight: '6rem', paddingRight: '2rem' }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        <MenuItem
          onClick={handleThemeClose}
          classes={{ root: classes.menuItem }}
        >
          Rust
        </MenuItem>
        <MenuItem
          onClick={handleThemeClose}
          classes={{ root: classes.menuItem }}
        >
          Coal
        </MenuItem>
        <MenuItem
          onClick={handleThemeClose}
          classes={{ root: classes.menuItem }}
        >
          Navy
        </MenuItem>
        <MenuItem
          onClick={handleThemeClose}
          classes={{ root: classes.menuItem }}
        >
          Ayu
        </MenuItem>
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List disablePadding>
          <ListItem divider disableRipple>
            <img
              src={logo}
              alt="Company's logo"
              className={classes.logo}
              style={{ boxShadow: '0.1rem 0.1rem 0.1rem 0.1rem #fff' }}
            />
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/'
            onClick={() => {
              setOpenDrawer(false);
              props.setSelectedIndex(0);
            }}
            select={props.value === 0}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 0
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/training'
            onClick={() => {
              setOpenDrawer(false);
              props.setSelectedIndex(1);
            }}
            selected={props.value === 1}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 1
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Training
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to='/about_me'
            onClick={() => {
              setOpenDrawer(false);
              props.setSelectedIndex(2);
            }}
            selected={props.value === 2}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 2
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              About
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/hire_me'
            onClick={() => {
              setOpenDrawer(false);
              props.setSelectedIndex(3);
            }}
            selected={props.value === 3}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
            >
              Hire Me
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button
              className='logoContainer'
              component={Link}
              to='/'
              disableRipple
            >
              <img src={logo} alt="Company's logo" className={classes.logo} />
              <Typography
                variant='h5'
                className={classes.logoTitle}
                style={{ color: 'white', textTransform: 'none' }}
              >
                The Beaver
              </Typography>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
