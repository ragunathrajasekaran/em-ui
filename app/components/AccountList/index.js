/**
 *
 * AccountList
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import AccountListItem from '../AccountListItem';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

function AccountList(props) {
  // eslint-disable-next-line react/prop-types
  const {
    classes,
    accounts,
    didSelectRow,
    selectedAccount,
    didSelectAccountToDelete,
  } = props;
  return (
    <div>
      <List className={classes.root}>
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
      <Route>
        {({ location }) => (
          <Typography gutterBottom>
            Current route: {location.pathname}
          </Typography>
        )}
      </Route>
    </div>
  );
}

AccountList.propTypes = {
  classes: PropTypes.object.isRequired,
  accounts: PropTypes.array,
  selectedAccount: PropTypes.object,
  didSelectAccountToDelete: PropTypes.func,
  didSelectRow: PropTypes.func,
};

export default compose(
  withRouter,
  withStyles(styles),
)(AccountList);

// export default withStyles(styles)(AccountList);
