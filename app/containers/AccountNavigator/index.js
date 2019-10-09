/**
 *
 * AccountNavigator
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
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import AccountList from '../../components/AccountList';
import saga from './saga';
import reducer from './reducer';
import makeSelectAccountNavigator from './selectors';

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
    top: 100,
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

export class AccountNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAccount: {},
    };
  }

  didSelectRow = selectedAccount => {
    // eslint-disable-next-line no-console
    console.log('Selected Account', selectedAccount);
    this.setState(prevState => ({
      selectedAccount: {
        ...prevState.selectedAccount,
        ...selectedAccount,
      },
    }));
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
          <AccountList
            accounts={this.props.accounts}
            didSelectRow={this.didSelectRow}
            selectedAccount={this.state.selectedAccount}
          />
        </Drawer>
        <main className={classes.content}>
          <Typography paragraph>
            {this.state.selectedAccount.title
              ? JSON.stringify(this.state.selectedAccount)
              : 'Please Select An Account To View The Details'}
          </Typography>
        </main>
      </div>
    );
  }
}

AccountNavigator.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object,
  accounts: PropTypes.array,
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
