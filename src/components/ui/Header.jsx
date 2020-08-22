import React, { useState } from 'react';
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
// import ContactsIcon from '@material-ui/icons/Contacts';
// import HomeIcon from '@material-ui/icons/Home';

import Button from '@material-ui/core/Button';
// import BrightnessLight from '@material-ui/icons/BrightnessMedium';
// import BrightnessDark from '@material-ui/icons/Brightness7';
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
  // const { children, window } = props;
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
}));

// TODO: I didn't add useEffect to handle refresh page...

export default function Header(props) {
  const classes = useStyle();
  const theme = useTheme();

  const [value, setValue] = useState(0); // Active tab
  const [anchorEl, setAnchorEl] = useState(null); // Open or close MenuItem
  const [open, setOpenMenu] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorElTheme, setAnchorElTheme] = useState(null);
  const [openTheme, setOpenTheme] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0); // Make a selected menu active or visible

  // const currentTheme = false;

  const handleActiveTab = (e, newValue) => {
    setValue(newValue);
  };

  // handle click on menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (id) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(id);
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
    },
    {
      name: '⎩  Frontend development',
      link: '/trainging/frontend_development',
    },
    {
      name: '⎩  Backend development',
      link: '/training/backend_development',
    },
    {
      name: '⎩  DevOps',
      link: '/training/devops',
    },
  ];

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabsContainer}
        textColor='secondary'
        value={value}
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
          label='Contact Me'
          aria-label='contact me'
          component={Link}
          to='/contact'
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
              setValue(1);
              handleMenuItemClick(id);
            }}
            selected={id === selectedIndex && value === 1}
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
          <ListItem
            button
            component={Link}
            to='/'
            onClick={() => {
              setOpenDrawer(false);
              setSelectedIndex(0);
            }}
            select={value === 0}
          >
            <ListItemText disableTypography className={value===0 ? [classes.drawerItem, classes.drawerItemSelected], classes.drawerItem}>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/training'
            onClick={() => {
              setOpenDrawer(false);
              setSelectedIndex(1);
            }}
            selected={value === 1}
          >
            <ListItemText disableTypography className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
              Training
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to='/about'
            onClick={() => {
              setOpenDrawer(false);
              setSelectedIndex(2);
            }}
            selected={value === 2}
          >
            <ListItemText disableTypography className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
              About
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to='/hire_me'
            onClick={() => {
              setOpenDrawer(false);
              setSelectedIndex(3);
            }}
            selected={value === 3}
          >
            <ListItemText disableTypography className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}>
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
