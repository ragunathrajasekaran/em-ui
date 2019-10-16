/**
 *
 * AppBarNavigator
 *
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import withStyles from '@material-ui/core/styles/withStyles';
import MenuList from '../MenuList/Loadable';
import EmAppBar from '../EmAppBar/Loadable';

// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  drawerPaper: {
    background: theme.palette.secondary.light,
  },
});

class AppBarNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false,
    };
  }

  toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    this.setState({ isMenuOpened: open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <EmAppBar classes={classes} toggleDrawer={this.toggleDrawer} />
        <Drawer
          open={this.state.isMenuOpened}
          onClose={this.toggleDrawer(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <MenuList toggleDrawer={this.toggleDrawer} />
        </Drawer>
      </div>
    );
  }
}

AppBarNavigator.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(AppBarNavigator);
