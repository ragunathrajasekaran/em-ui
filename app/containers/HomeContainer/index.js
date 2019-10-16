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
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AccountNavigator from 'containers/AccountNavigator/Loadable';
import SettingsContainer from 'containers/SettingsContainer/Loadable';
import makeSelectHomeContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import AppBarNavigator from '../../components/AppBarNavigator/Loadable';

const accounts = [
  { id: 1, title: 'Credit Account', desc: 'Credit Card Account', total: 3333 },
  { id: 2, title: 'My Wallet', desc: 'My Personal Waller', total: 30 },
  { id: 3, title: 'Bank Account', desc: 'My Savings Account', total: 10000 },
];

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  content: {
    flexGrow: 1,
    marginTop: 64,
    height: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.secondary.light,
  },
  toolbar: theme.mixins.toolbar,
});

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [...accounts],
    };
  }

  didSelectAccountToDelete = accountToDelete => {
    // eslint-disable-next-line no-console
    console.log('didSelectAccountToDelete', accountToDelete);
    const filteredItems = this.state.accounts.filter(
      account => account.id !== accountToDelete.id,
    );
    this.setState({ accounts: [...filteredItems] });
  };

  render() {
    const { classes, match } = this.props;
    return (
      <div className={classes.root}>
        <AppBarNavigator />
        <main className={classes.content}>
          <Switch>
            <Route
              exact
              path={`${match.url}accounts`}
              render={() => <AccountNavigator accounts={this.state.accounts} />}
            />
            <Route
              path={`${match.url}settings`}
              render={() => (
                <SettingsContainer
                  accounts={this.state.accounts}
                  didSelectAccountToDelete={this.didSelectAccountToDelete}
                />
              )}
            />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object,
  match: PropTypes.object,
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
  withStyles(styles),
)(HomeContainer);
