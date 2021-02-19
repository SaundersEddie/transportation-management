import React from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

// import Login from '../pages/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <PageHeader />
      <CssBaseline />
    </>
  );
}

export default App;
