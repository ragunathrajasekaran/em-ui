/**
 *
 * SettingsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AccountList from '../../components/AccountList';
import saga from './saga';
import reducer from './reducer';
import makeSelectSettingsContainer from './selectors';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  list: {
    width: 250,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 64,
  },
  content: {
    flexGrow: 1,
    padding: 8,
  },
  toolbar: theme.mixins.toolbar,
});

/* eslint-disable react/prefer-stateless-function */
export class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSettingMenu: 'accounts',
    };

    this.didSelectRow = this.didSelectRow.bind(this);
    this.didSelectAccountToDelete = this.didSelectAccountToDelete.bind(this);
  }

  didSelectRow(selectedSettingMenu) {
    console.log('selectedSettingMenu', selectedSettingMenu);
    this.setState({ selectedSettingMenu });
  }

  didSelectAccountToDelete(accountToDelete) {
    console.log('didSelectAccountToDelete', accountToDelete);
    // this.setState({ selectedSettingMenu });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Divider />
          <List>
            {['Accounts', 'User'].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => this.didSelectRow(text)}
                selected={
                  this.state.selectedSettingMenu.toLowerCase() ===
                  text.toLowerCase()
                }
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          {
            {
              accounts: (
                <AccountList
                  accounts={this.props.accounts}
                  didSelectAccountToDelete={this.didSelectAccountToDelete}
                />
              ),
              user: <UserSettings />,
            }[this.state.selectedSettingMenu.toLowerCase()]
          }
        </main>
      </div>
    );
  }
}

SettingsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object,
  match: PropTypes.object,
  accounts: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  settingsContainer: makeSelectSettingsContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'settingsContainer', reducer });
const withSaga = injectSaga({ key: 'settingsContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(SettingsContainer);

function UserSettings() {
  return <h2>User Settings</h2>;
}
