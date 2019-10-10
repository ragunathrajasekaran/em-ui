import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AccountList from './Loadable';

export const accounts = [
  { id: 1, title: 'Credit Account', desc: 'Credit Card Account', total: 3333 },
  { id: 2, title: 'My Wallet', desc: 'My Personal Waller', total: 30 },
  { id: 3, title: 'Bank Account', desc: 'My Savings Account', total: 10000 },
];

export const actions = {
  didSelectRow: action('didSelectRow'),
  didSelectAccountToDelete: action('didSelectAccountToDelete'),
};

storiesOf('AccountList', module)
  .add('default', () => (
    <AccountList accounts={accounts} didSelectRow={actions.didSelectRow} />
  ))
  .add('Selected', () => (
    <AccountList
      accounts={accounts}
      didSelectRow={actions.didSelectRow}
      selectedAccount={accounts[0]}
    />
  ))
  .add('DeleteList', () => (
    <AccountList
      accounts={accounts}
      didSelectAccountToDelete={actions.didSelectAccountToDelete}
    />
  ));
