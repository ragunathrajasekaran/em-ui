/**
 *
 * AccountList
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import List from '@material-ui/core/List';
import * as PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountListItem from '../AccountListItem';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function AccountList(props) {
  const {
    classes,
    accounts,
    didSelectRow,
    selectedAccount,
    didSelectAccountToDelete,
  } = props;
  return (
    <div>
      <CssBaseline />
      <List>
        {accounts.map(account => (
          <AccountListItem
            key={account.id}
            account={account}
            didSelectRow={didSelectRow}
            selected={selectedAccount && selectedAccount.id === account.id}
            didSelectAccountToDelete={didSelectAccountToDelete}
          />
        ))}
      </List>
    </div>
  );
}

AccountList.propTypes = {
  classes: PropTypes.object.isRequired,
  accounts: PropTypes.array,
  selectedAccount: PropTypes.object,
  didSelectRow: PropTypes.func,
  didSelectAccountToDelete: PropTypes.func,
};

export default compose(withStyles(styles))(AccountList);
