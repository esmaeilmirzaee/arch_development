import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
// import bootstrap from '../assets/img/logos/bxl-bootstrap.svg';
import css from '../assets/img/logos/css3.svg';
import figma from '../assets/img/logos/figma.svg';
import git from '../assets/img/logos/git.svg';
import html from '../assets/img/logos/html5.svg';
import javascript from '../assets/img/logos/javascript.svg';
import react from '../assets/img/logos/react.svg';
import redux from '../assets/img/logos/redux.svg';
import sass from '../assets/img/logos/sass.svg';
import docker from '../assets/img/logos/docker.svg';
import rust from '../assets/img/logos/rust.svg';
import spring from '../assets/img/logos/springio.svg';
import elastic from '../assets/img/logos/elastic.svg';
import golang from '../assets/img/logos/golang.svg';
import java from '../assets/img/logos/java.svg';
import jetbrains from '../assets/img/logos/jetbrains.svg';
import mongodb from '../assets/img/logos/mongodb.svg';
import postgres from '../assets/img/logos/postgresql.svg';

const useStyle = makeStyles((theme) => ({
  logo: {
    width: '5rem',
  },
}));

export default function LandingPage() {
  const classes = useStyle();

  return (
    <Grid container direction='column' lg>
      <Grid item>
        <Grid container direction='column' alignItems='center' md>
          <Grid item md={6}>
            <Typography variant='h3'>Frontend & Backend</Typography>
          </Grid>
          <Grid item md={6}>
            <Typography>
              <span>
                And give <FaHandHoldingHeart /> to software applications.
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction='row' justify='center' spacing={2} lg>
          <Grid item>
            <img className={classes.logo} src={java} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={spring} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={elastic} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={rust} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={golang} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={postgres} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={mongodb} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={html} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={css} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={sass} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={javascript} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={react} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={redux} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={docker} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={git} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img className={classes.logo} src={figma} alt='bootstrap' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
