import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the accountNavigator state domain
 */

const selectAccountNavigatorDomain = state =>
  state.get('accountNavigator', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AccountNavigator
 */

const makeSelectAccountNavigator = () =>
  createSelector(selectAccountNavigatorDomain, substate => substate.toJS());

export default makeSelectAccountNavigator;
export { selectAccountNavigatorDomain };
