/**
 *
 * HomeContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AccountNavigator from 'containers/AccountNavigator/Loadable';
import SettingsContainer from 'containers/SettingsContainer/Loadable';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeSelectHomeContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import AccountList from '../../components/AccountList/Loadable';

const accounts = [
  { id: 1, title: 'Credit Account', desc: 'Credit Card Account', total: 3333 },
  { id: 2, title: 'My Wallet', desc: 'My Personal Waller', total: 30 },
  { id: 3, title: 'Bank Account', desc: 'My Savings Account', total: 10000 },
];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [...accounts],
      isMenuOpened: false,
    };
  }

  toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    this.setState({ isMenuOpened: open });
  };

  sideList = () => (
    <div
      className={this.props.classes.list}
      role="presentation"
      onClick={this.toggleDrawer(false)}
      onKeyDown={this.toggleDrawer(false)}
    >
      <List>
        {['Accounts', 'Settings'].map((text, index) => (
          <ListItem button key={text} component={Link} to={text.toLowerCase()}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  render() {
    const { classes, match } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={this.toggleDrawer(true)} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.isMenuOpened}
          onClose={this.toggleDrawer(false)}
        >
          {this.sideList()}
        </Drawer>
        <Switch>
          <Route
            exact
            path={`${match.url}accounts`}
            component={AccountNavigator}
          />
          <Route path={`${match.url}settings`} component={SettingsContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

HomeContainer.propTypes = {
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
