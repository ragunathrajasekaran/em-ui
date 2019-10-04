import { fromJS } from 'immutable';
import accountNavigatorReducer from '../reducer';

describe('accountNavigatorReducer', () => {
  it('returns the initial state', () => {
    expect(accountNavigatorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
