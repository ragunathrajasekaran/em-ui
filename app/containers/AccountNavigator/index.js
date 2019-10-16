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

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

export class AccountNavigator extends React.Component {
  didSelectRow = selectedAccount => {
    // eslint-disable-next-line no-console
    console.log('Selected Account', selectedAccount);
  };

  render() {
    return (
      <AccountNavigation
        className={this.props.classes.root}
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
