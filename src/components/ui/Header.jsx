import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/img/logo_0_2.svg';

import { Tabs, Tab } from '@material-ui/core';
// import WorkIcon from '@material-ui/icons/Work';
// import SchoolIcon from '@material-ui/icons/School';
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
  },
  logoTitle: {
    fontWeight: '400',
    fontStyle: 'italic',
    color: 'white',
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
}));

// TODO: I didn't add useEffect to handle refresh page...

export default function Header(props) {
  const classes = useStyle();
  const [value, setValue] = useState(0); // Active tab
  const [anchorEl, setAnchorEl] = useState(null); // Open or close MenuItem
  const [open, setOpen] = useState(false);

  const [anchorElTheme, setAnchorElTheme] = useState(null);
  const [openTheme, setOpenTheme] = useState(false);

  // const currentTheme = false;

  const handleActiveTab = (e, newValue) => {
    setValue(newValue);
  };

  // handle click on menu
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleThemeClick = (e) => {
    setAnchorElTheme(e.currentTarget);
    setOpenTheme(true);
  };

  const handleThemeClose = () => {
    setAnchorElTheme(null);
    setOpenTheme(false);
  };

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
                style={{ color: 'white' }}
              >
                The Beaver
              </Typography>
            </Button>
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
                label='Training'
                aria-label='training'
                component={Link}
                to='/training'
                onMouseOver={(event) => handleClick(event)} // menu
              />
              <Tab
                className={classes.tab}
                // icon={<WorkIcon />}
                label='About Me'
                aria-label='resume'
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
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/training'
              >
                Training
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/frontend_development'
                classes={{ root: classes.menuItem }}
              >
                ⎩ Front-end development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue();
                }}
                component={Link}
                to='/backend_development'
                classes={{ root: classes.menuItem }}
              >
                ⎩ Back-end development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue();
                }}
                component={Link}
                to='/devops'
                classes={{ root: classes.menuItem }}
              >
                ⎩ DevOps
              </MenuItem>
            </Menu>
            {/* Colour theme selection menu */}
            <Menu
              id='theme-menu'
              anchorEl={anchorElTheme}
              open={openTheme}
              onClose={handleThemeClose}
              style={{ transformOrigin: 'bottom' }}
            >
              <MenuItem onClick={handleThemeClose}>Rust</MenuItem>
              <MenuItem onClick={handleThemeClose}>Coal</MenuItem>
              <MenuItem onClick={handleThemeClose}>Navy</MenuItem>
              <MenuItem onClick={handleThemeClose}>Ayu</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
