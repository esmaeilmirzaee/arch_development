import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';

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
  link: {
    color: '#fefefe',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '1rem className={classes.gridItem}',
  },
}));

export default function Footer(props) {
  const classes = useStyle();
  return (
    <Grid container className={classes.footer} spacing={2}>
      <Grid item xs>
        <Typography component='h6' variant='h3' className={classes.logo}>
          The Beaver
        </Typography>
      </Grid>
      <Hidden mdDown>
        <Grid
          container
          item
          direction='column'
          xs
          spacing={2}
          className={classes.gridItem}
        >
          <Grid
            item
            className={classes.link}
            component={Link}
            to='/training'
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(0);
            }}
          >
            Training
          </Grid>
          <Grid
            item
            className={classes.link}
            component={Link}
            to='/training/frontend_development'
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(1);
            }}
          >
            ⎩ Frontend development
          </Grid>
          <Grid
            item
            className={classes.link}
            component={Link}
            to='/training/backend_development'
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(2);
            }}
          >
            ⎩ Backend development
          </Grid>
          <Grid
            item
            className={classes.link}
            component={Link}
            to='/training/devops'
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(3);
            }}
          >
            ⎩ DevOps
          </Grid>
        </Grid>
        <Grid
          className={classes.gridItem}
          container
          item
          direction='column'
          xs
          spacing={2}
        >
          <Grid item>
            <Typography
              variant='body2'
              className={classes.link}
              component={Link}
              to='/about_me'
            >
              About Me
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='h5'
              className={classes.link}
              component={Link}
              to='/hire_me'
            >
              Hire Me
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
}
