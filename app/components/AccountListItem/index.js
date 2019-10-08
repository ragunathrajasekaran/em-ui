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
    const { account, selected, didSelectAccountToDelete } = this.props;

    return (
      <React.Fragment>
        <ListItem
          button
          onClick={this.didSelectAccount(account)}
          selected={selected}
        >
          <ListItemText primary={account.title} secondary={account.total} />
          {didSelectAccountToDelete ? (
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <DeleteIcon onClick={this.didSelectAccountToDelete(account)} />
              </IconButton>
            </ListItemSecondaryAction>
          ) : null}
        </ListItem>
        <Divider variant="middle" />
      </React.Fragment>
    );
  }
}

AccountListItem.propTypes = {
  account: PropTypes.object,
  selected: PropTypes.bool,
  didSelectRow: PropTypes.func,
  didSelectAccountToDelete: PropTypes.func,
};

export default AccountListItem;
