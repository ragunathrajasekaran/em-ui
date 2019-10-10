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
import AccountListItem from '../AccountListItem';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function AccountList(props) {
  const {
    accounts,
    didSelectRow,
    selectedAccount,
    didSelectAccountToDelete,
  } = props;
  return (
    <List>
      {accounts.map(account => (
        <AccountListItem
          key={account.id}
          account={account}
          selected={selectedAccount && selectedAccount.id === account.id}
          didSelectRow={didSelectRow}
          didSelectAccountToDelete={didSelectAccountToDelete}
        />
      ))}
    </List>
  );
}

AccountList.propTypes = {
  accounts: PropTypes.array,
  selectedAccount: PropTypes.object,
  didSelectRow: PropTypes.func,
  didSelectAccountToDelete: PropTypes.func,
};

export default compose(withStyles(styles))(AccountList);
