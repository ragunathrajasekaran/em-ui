/**
 *
 * HomeContainer
 *
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import makeSelectHomeContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import AccountList from '../../components/AccountList/Loadable';

const accounts = [
  { id: 1, title: 'Credit Account', desc: 'Credit Card Account', total: 3333 },
  { id: 2, title: 'My Wallet', desc: 'My Personal Waller', total: 30 },
  { id: 3, title: 'Bank Account', desc: 'My Savings Account', total: 10000 },
];

/* eslint-disable react/prefer-stateless-function */
export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accounts: [...accounts] };
  }

  componentDidMount() {
    this.fetchAccounts();
  }

  fetchAccounts = () => {
    fetch('http://localhost:8080/accounts')
      .then(response => response.json())
      .then(response => this.handleSuccessResponse(response))
      .catch(error => this.handleErrorResponse(error));
  };

  handleSuccessResponse = response => {
    this.setState({ accounts: [...response.content] });
  };

  handleErrorResponse = error => {
    // eslint-disable-next-line no-console
    console.log('Error while fetching accounts :', error);
  };

  render() {
    return (
      <div>
        <AccountList accounts={this.state.accounts} />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homeContainer: makeSelectHomeContainer(),
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

const withReducer = injectReducer({ key: 'homeContainer', reducer });
const withSaga = injectSaga({ key: 'homeContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomeContainer);
