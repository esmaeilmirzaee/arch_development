import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { FaHandHoldingHeart } from 'react-icons/fa';
import bootstrap from '../assets/img/logos/bxl-bootstrap';
import css from '../assets/img/logos/bxl-css3';
import figma from '../assets/img/logos/bxl-figma';
import git from '../assets/img/logos/bxl-git';
import html from '../assets/img/logos/bxl-html5';
import javascript from '../assets/img/logos/bxl-javascript';
import react from '../assets/img/logos/bxl-react';
import redux from '../assets/img/logos/bxl-redux';
import sass from '../assets/img/logos/bxl-sass';
import docker from '../assets/img/logos/docker';
import rust from '../assets/img/logos/rust';
import spring from '../assets/img/logos/springio';
import elastic from '../assets/img/logos/elastic';
import golang from '../assets/img/logos/golang';
import java from '../assets/img/logos/java';
import jetbrains from '../assets/img/logos/jetbrains';
import mongodb from '../assets/img/logos/mongodb';
import postgres from '../assets/img/logos/postgres';

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
