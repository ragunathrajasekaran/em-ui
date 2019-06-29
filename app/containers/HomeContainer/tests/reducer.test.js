import { fromJS } from 'immutable';
import homeContainerReducer from '../reducer';

describe('homeContainerReducer', () => {
  it('returns the initial state', () => {
    expect(homeContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
