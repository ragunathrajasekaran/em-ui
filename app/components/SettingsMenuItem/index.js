/**
 *
 * SettingsMenuItem
 *
 */

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import * as PropTypes from 'prop-types';
// import styled from 'styled-components';

function SettingsMenuItem(props) {
  return (
    <ListItem
      button
      onClick={props.onClick}
      selected={
        props.selectedSettingMenu.toLowerCase() === props.text.toLowerCase()
      }
    >
      <ListItemIcon>
        {props.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  );
}

SettingsMenuItem.propTypes = {
  onClick: PropTypes.func,
  selectedSettingMenu: PropTypes.any,
  text: PropTypes.string,
  index: PropTypes.number,
};

export default SettingsMenuItem;
