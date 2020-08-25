import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { FaHandHoldingHeart } from 'react-icons/fa';
import bootstrap from '../assets/img/logos/bxl-bootstrap.svg';
import css from '../assets/img/logos/bxl-css3.svg';
import figma from '../assets/img/logos/bxl-figma.svg';
import git from '../assets/img/logos/bxl-git.svg';
import html from '../assets/img/logos/bxl-html5.svg';
import javascript from '../assets/img/logos/bxl-javascript.svg';
import react from '../assets/img/logos/bxl-react.svg';
import redux from '../assets/img/logos/bxl-redux.svg';
import sass from '../assets/img/logos/bxl-sass.svg';
import docker from '../assets/img/logos/docker.svg';
import rust from '../assets/img/logos/rust.svg';
import spring from '../assets/img/logos/springio.svg';
import elastic from '../assets/img/logos/elastic.svg';
import golang from '../assets/img/logos/golang.svg';
import java from '../assets/img/logos/java.svg';
import jetbrains from '../assets/img/logos/jetbrains.svg';
import mongodb from '../assets/img/logos/mongodb.svg';
import postgres from '../assets/img/logos/postgres.svg';

export default function LandingPage() {
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
        <Grid container direction='row' justify='center' lg>
          <Grid item>
            <img src={java} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={spring} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={elastic} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={rust} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={golang} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={postgres} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={mongodb} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={html} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={css} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={sass} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={javascript} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={react} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={redux} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={bootstrap} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={docker} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={git} alt='bootstrap' />
          </Grid>
          <Grid item>
            <img src={figma} alt='bootstrap' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
