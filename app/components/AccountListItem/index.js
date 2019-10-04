/**
 *
 * AccountListItem
 *
 */

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const AccountListItem = props => (
  <ListItem
    button
    onClick={() => props.didSelectRow(props.account)}
    selected={props.selected}
  >
    <ListItemText
      primary={props.account.title}
      secondary={props.account.total}
    />
    {props.didSelectAccountToDelete ? (
      <ListItemSecondaryAction>
        <IconButton aria-label="Comments">
          <DeleteIcon
            onClick={() => props.didSelectAccountToDelete(props.account)}
          />
        </IconButton>
      </ListItemSecondaryAction>
    ) : null}
  </ListItem>
);

// const AccountListItem = account => (
//   <ListItemLink to="/accounts/1" primary={account.title} icon={<InboxIcon />} />
// );
AccountListItem.propTypes = {
  account: PropTypes.object,
  selected: PropTypes.bool,
  didSelectRow: PropTypes.func,
  didSelectAccountToDelete: PropTypes.func,
};

export default AccountListItem;
// export default withRouterInnerRef(AccountListItem);
