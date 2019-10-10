import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withStyles } from '@material-ui/core/styles';

import AccountNavigation from './Loadable';

export const accounts = [
  { id: 1, title: 'Credit Account', desc: 'Credit Card Account', total: 3333 },
  { id: 2, title: 'My Wallet', desc: 'My Personal Waller', total: 30 },
  { id: 3, title: 'Bank Account', desc: 'My Savings Account', total: 10000 },
];

const drawerWidth = 240;

export const styles = theme => ({
  root: {
    display: 'flex',
  },
  list: {
    width: drawerWidth,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    top: 100,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 0,
  },
  content: {
    flexGrow: 1,
    padding: 8,
  },
  toolbar: theme.mixins.toolbar,
});

export const AccountNavigationStyled = withStyles(styles)(AccountNavigation);

export const actions = {
  didSelectRow: action('didSelectRow'),
  didSelectAccountToDelete: action('didSelectAccountToDelete'),
};

storiesOf('AccountNavigation', module)
  .add('default', () => (
    <AccountNavigationStyled
      accounts={accounts}
      didSelectRow={actions.didSelectRow}
    />
  ))
  .add('Selected', () => (
    <AccountNavigationStyled
      accounts={accounts}
      didSelectRow={actions.didSelectRow}
      selectedAccount={accounts[0]}
    />
  ));
