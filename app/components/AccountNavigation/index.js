/**
 *
 * AccountNavigation
 *
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AccountList from '../AccountList';
import AccountDetail from '../AccountDetail';
import { withStyles } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.dark,
  },
  list: {
    width: drawerWidth,
  },
  nonPadding: {
    paddingTop: 0,
  },
  content: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: theme.palette.secondary.dark,
    height: 'calc(100vh - 64px)',
  },
  drawer: {
    width: drawerWidth,
    top: 64,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 64,
    background: theme.palette.secondary.light,
  },
});
class AccountNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAccount:
        props.selectedAccount !== undefined ? props.selectedAccount : {},
    };
  }

  didSelectRow = selectedAccount => {
    this.props.didSelectRow(selectedAccount);
    this.setState(prevState => ({
      selectedAccount: {
        ...prevState.selectedAccount,
        ...selectedAccount,
      },
    }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Divider />
          <AccountList
            classes={{
              padding: classes.nonPadding,
            }}
            disablePadding
            className={classes.list}
            accounts={this.props.accounts}
            didSelectRow={this.didSelectRow}
            selectedAccount={this.state.selectedAccount}
          />
        </Drawer>
        <main className={classes.content}>
          <AccountDetail {...this.state.selectedAccount} />
        </main>
      </div>
    );
  }
}

AccountNavigation.propTypes = {
  classes: PropTypes.object,
  accounts: PropTypes.array,
  didSelectRow: PropTypes.func,
  selectedAccount: PropTypes.object,
};

export default withStyles(styles)(AccountNavigation);
