import React, { useContext } from 'react';
import {  Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Button from '@material-ui/core/Button';
import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  gridContainer: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    display: 'flex',
  },
  buttonGridContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '0px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, toggleVideo, muteCall } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.gridContainer}>
        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {name || 'Name'}
              </Typography>
              <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper className={classes.paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {call.name || 'Name'}
              </Typography>
              <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )}
      </Grid>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.buttonGridContainer}>
          <Button variant="contained" color="primary" onClick={toggleVideo}>
            Video 
          </Button>
        </Grid>

        <Grid item xs={12} md={6} className={classes.buttonGridContainer}>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />} onClick={muteCall}
      >
        Mute
      </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
