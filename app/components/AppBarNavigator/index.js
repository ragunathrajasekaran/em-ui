/**
 *
 * AppBarNavigator
 *
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '../MenuList/Loadable';
import EmAppBar from '../EmAppBar/Loadable';

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
        >
          <MenuList classes={classes} toggleDrawer={this.toggleDrawer} />
        </Drawer>
      </div>
    );
  }
}

AppBarNavigator.propTypes = {
  classes: PropTypes.object,
};

export default AppBarNavigator;
