/**
 *
 * AccountListItem
 *
 */

import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import * as PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  list: {
    width: 250,
    color: theme.palette.secondary.main,
  },
  text: {
    textColor: theme.palette.primary.dark,
  },
  listItemPrimary: {
    color: theme.palette.primary.dark,
  },
  listItemSecondary: {
    color: theme.palette.primary.light,
  },
});

class AccountListItem extends Component {
  didSelectAccount = account => e => {
    e.preventDefault();
    if (this.props.didSelectRow !== undefined) this.props.didSelectRow(account);
  };

  didSelectAccountToDelete = account => e => {
    e.preventDefault();
    if (this.props.didSelectAccountToDelete !== undefined)
      this.props.didSelectAccountToDelete(account);
  };

  render() {
    const { account, selected, didSelectAccountToDelete, classes } = this.props;

    return (
      <React.Fragment>
        <ListItem
          button
          onClick={this.didSelectAccount(account)}
          selected={selected}
          color="inherit"
        >
          <ListItemText
            primary={account.title}
            secondary={account.total}
            color="inherit"
            classes={{
              primary: classes.listItemPrimary,
              secondary: classes.listItemSecondary,
            }}
          />
          {didSelectAccountToDelete ? (
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <DeleteIcon onClick={this.didSelectAccountToDelete(account)} />
              </IconButton>
            </ListItemSecondaryAction>
          ) : null}
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
}

AccountListItem.propTypes = {
  account: PropTypes.object,
  selected: PropTypes.bool,
  didSelectRow: PropTypes.func,
  didSelectAccountToDelete: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(AccountListItem);
