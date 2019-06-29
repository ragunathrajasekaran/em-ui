/**
 *
 * AccountList
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/MoneyOff';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const AccountListItem = account => (
  <ListItem>
    <Avatar>
      <ImageIcon />
    </Avatar>
    <ListItemText primary={account.title} secondary={account.total} />
  </ListItem>
);

function AccountList(props) {
  const { classes, accounts } = props;
  return (
    <List className={classes.root}>
      {accounts.map(account => (
        <AccountListItem key={account.id} {...account} />
      ))}
    </List>
  );
}

AccountList.propTypes = {
  classes: PropTypes.object.isRequired,
  accounts: PropTypes.array,
};

export default withStyles(styles)(AccountList);
