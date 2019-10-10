import React from 'react';
import { storiesOf } from '@storybook/react';

import AccountDetail from './Loadable';

export const account = {
  id: 1,
  title: 'Credit Account',
  desc: 'Credit Card Account',
  total: 3333,
};

storiesOf('AccountDetail', module)
  .add('default', () => <AccountDetail {...account} />)
  .add('NoContent', () => <AccountDetail />);
