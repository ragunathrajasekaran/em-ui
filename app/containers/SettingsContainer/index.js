/**
 *
 * SettingsContainer
 *
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import AccountList from '../../components/AccountList';
import SettingsMenuItem from '../../components/SettingsMenuItem';
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

const UserSettings = () => <h2>User Settings</h2>;

/* eslint-disable react/prefer-stateless-function */
export class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSettingMenu: 'accounts',
    };
  }

  didSelectRow = selectedSettingMenu => e => {
    e.preventDefault();
    this.setState({ selectedSettingMenu });
  };

  didSelectAccountToDelete = accountToDelete => {
    this.props.didSelectAccountToDelete(accountToDelete);
  };

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
              <SettingsMenuItem
                key={text}
                onClick={this.didSelectRow(text)}
                selectedSettingMenu={this.state.selectedSettingMenu}
                text={text}
                index={index}
              />
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
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object,
  accounts: PropTypes.array,
  didSelectAccountToDelete: PropTypes.func,
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
