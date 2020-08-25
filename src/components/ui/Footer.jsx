import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import BiGithub from '../../assets/img/social_network/bxl-github.svg';
import BiGoogle from '../../assets/img/social_network/bxl-google.svg';
import BiLinkedin from '../../assets/img/social_network/bxl-linkedin.svg';
import BiTwitter from '../../assets/img/social_network/bxl-twitter.svg';
import BiYouTube from '../../assets/img/social_network/bxl-youtube.svg';
import logo from '../../assets/img/logo_0_2.svg';

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
    padding: '1rem',
    height: '5rem',
  },
  link: {
    color: '#fefefe',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '1rem className={classes.gridItem}',
  },
  socialMedia: {},
  socialMediaIcon: {
    height: '2rem',
    color: '#fdfdfd',
  },
}));

export default function Footer(props) {
  const classes = useStyle();
  return (
    <React.Fragment>
      <Grid
        container
        direction='column'
        alignItems='center'
        className={classes.footer}
        lg={12}
      >
        <Hidden mdDown>
          <Grid
            container
            item
            justify='flex-end'
            lg={6}
            style={{ marginTop: '2rem' }}
          >
            <Grid
              container
              item
              direction='column'
              lg={6}
              xs={6}
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
              lg={6}
              xs={6}
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
          </Grid>
        </Hidden>
        <Grid container item direction='column' alignItems='center' lg={6}>
          <Grid item xs>
            <img className={classes.logo} src={logo} alt='The Beaver' />
          </Grid>
          <Grid
            container
            item
            className={classes.socialMedia}
            direction='row'
            lg={3}
            md={4}
            xs={12}
          >
            <Grid item xs>
              <img
                src={BiGithub}
                alt='Github'
                className={classes.socialMediaIcon}
              />
            </Grid>
            <Grid item xs>
              <img
                src={BiGoogle}
                alt='Google mail'
                className={classes.socialMediaIcon}
              />
            </Grid>
            <Grid item xs>
              <img
                src={BiLinkedin}
                alt='Linkedin'
                className={classes.socialMediaIcon}
              />
            </Grid>
            <Grid item xs>
              <img
                src={BiTwitter}
                alt='Twitter'
                className={classes.socialMediaIcon}
              />
            </Grid>
            <Grid item xs>
              <img
                src={BiYouTube}
                alt='YouTube'
                className={classes.socialMediaIcon}
              />
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography
              components='body1'
              variant='body2'
              style={{
                marginBottom: '1rem',
                color: '#fafafa',
                textShadow: '0.1rem 0.1rem 0.1rem 0.1rem #333',
              }}
            >
              The Beaver, TheBeaver, and The Beaver logo are registered
              trademarks of The Beaver, Inc.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
