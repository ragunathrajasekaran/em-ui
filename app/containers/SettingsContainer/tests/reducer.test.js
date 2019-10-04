import { fromJS } from 'immutable';
import settingsContainerReducer from '../reducer';

describe('settingsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(settingsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
