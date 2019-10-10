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

import { withStyles } from '@material-ui/core/styles';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import makeSelectAccountNavigator from './selectors';
import AccountNavigation from '../../components/AccountNavigation';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  list: {
    width: drawerWidth,
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
  didSelectRow = selectedAccount => {
    // eslint-disable-next-line no-console
    console.log('Selected Account', selectedAccount);
  };

  render() {
    return (
      <AccountNavigation
        classes={this.props.classes}
        accounts={this.props.accounts}
        didSelectRow={this.didSelectRow}
      />
    );
  }
}

AccountNavigator.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  accounts: PropTypes.array,
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
