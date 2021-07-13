import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

import { ChatEngine } from 'react-chat-engine';
import "./chatApp.css";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const useStyles = makeStyles((theme) => ({
  appBar: {
    //borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    border: '0px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const logoutFunc = () => {
  localStorage.clear();
  if (!localStorage.getItem('')) window.location.reload();
  return <LoginForm /> 
  }

const App = () => {
  const classes = useStyles();
  if (!localStorage.getItem('username')) return <LoginForm />
           

  return (
   
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h1" align="center">Teams Clone</Typography>
      </AppBar>
      <VideoPlayer />
      <Button variant="contained" color="primary" onClick={event => logoutFunc()}>
            logout
      </Button>
      <Sidebar>
        <Notifications />
      </Sidebar>
      <ChatEngine 
         height="50vh"
         projectID="2cd25e2f-42b7-4158-9b70-a424085368ee"
         userName="Vatsalya"
         userSecret="qwerty"
         renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App; 
