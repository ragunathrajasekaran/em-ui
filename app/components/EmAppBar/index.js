/**
 *
 * EmAppBar
 *
 */

import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import * as PropTypes from 'prop-types';

function EmAppBar(props) {
  const { classes, toggleDrawer } = props;
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon onClick={toggleDrawer(true)} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

EmAppBar.propTypes = {
  toggleDrawer: PropTypes.func,
  classes: PropTypes.object,
};

export default EmAppBar;
