/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeContainer from 'containers/HomeContainer/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  appRoot: {
    backgroundColor: theme.palette.secondary.light,
    height: '100%',
  },
});

function App(props) {
  // eslint-disable-next-line react/prop-types
  const { classes } = props;
  return (
    <div className={classes.appRoot}>
      <Switch>
        <Route path="/" component={HomeContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default withStyles(styles)(App);
