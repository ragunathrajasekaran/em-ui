/**
 *
 * MenuList
 *
 */

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';

function MenuList(props) {
  const { classes, toggleDrawer } = props;

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Accounts', 'Settings'].map((text, index) => (
          <ListItem button key={text} component={Link} to={text.toLowerCase()}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
}

MenuList.propTypes = {
  toggleDrawer: PropTypes.func,
  classes: PropTypes.object,
};

export default MenuList;
