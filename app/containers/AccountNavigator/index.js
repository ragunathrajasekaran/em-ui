/**
 *
 * AccountNavigator
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
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import AccountList from '../../components/AccountList';
import saga from './saga';
import reducer from './reducer';
import makeSelectAccountNavigator from './selectors';

const drawerWidth = 240;

const accounts = [
  { id: 1, title: 'Credit Account', desc: 'Credit Card Account', total: 3333 },
  { id: 2, title: 'My Wallet', desc: 'My Personal Waller', total: 30 },
  { id: 3, title: 'Bank Account', desc: 'My Savings Account', total: 10000 },
];

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
  },
  content: {
    flexGrow: 1,
    padding: 8,
  },
  toolbar: theme.mixins.toolbar,
});

/* eslint-disable react/prefer-stateless-function */
export class AccountNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [...accounts],
      selectedAccount: {},
    };

    this.didSelectRow = this.didSelectRow.bind(this);
  }

  didSelectRow(selectedAccount) {
    console.log('selectedAccount', selectedAccount);
    this.setState(prevState => ({
      selectedAccount: {
        ...prevState.selectedAccount,
        ...selectedAccount,
      },
    }));
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
          <div className={classes.toolbar} />
          <Divider />
          <AccountList
            accounts={this.state.accounts}
            didSelectRow={this.didSelectRow}
            selectedAccount={this.state.selectedAccount}
          />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            {JSON.stringify(this.state.selectedAccount)}
          </Typography>
        </main>
      </div>
    );
  }
}

AccountNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  accountNavigator: makeSelectAccountNavigator(),
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

const withReducer = injectReducer({ key: 'accountNavigator', reducer });
const withSaga = injectSaga({ key: 'accountNavigator', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(AccountNavigator);
