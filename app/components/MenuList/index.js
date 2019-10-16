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
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  list: {
    width: 250,
    color: theme.palette.secondary.main,
  },
  text: {
    textColor: theme.palette.primary.dark,
  },
  listItem: {
    color: theme.palette.primary.dark,
  },
});

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
          <ListItem
            button
            key={text.toUpperCase()}
            component={Link}
            to={text.toLowerCase()}
          >
            <ListItemIcon className={classes.listItem}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText
              primary={text.toUpperCase()}
              classes={{
                primary: classes.listItem,
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.listItem} />
    </div>
  );
}

MenuList.propTypes = {
  toggleDrawer: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(MenuList);
