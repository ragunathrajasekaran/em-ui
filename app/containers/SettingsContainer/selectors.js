import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the settingsContainer state domain
 */

const selectSettingsContainerDomain = state =>
  state.get('settingsContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SettingsContainer
 */

const makeSelectSettingsContainer = () =>
  createSelector(selectSettingsContainerDomain, substate => substate.toJS());

export default makeSelectSettingsContainer;
export { selectSettingsContainerDomain };
