import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AccountListItem from './index';

export const account = {
  id: 1,
  title: 'Credit Account',
  desc: 'Credit Card Account',
  total: 3333,
};

export const actions = {
  didSelectRow: action('didSelectRow'),
  didSelectAccountToDelete: action('didSelectAccountToDelete'),
};

storiesOf('AccountListItem', module)
  .add('default', () => <AccountListItem account={account} selected={false} />)
  .add('selected', () => <AccountListItem account={account} selected />)
  .add('selectedWithAction', () => (
    <AccountListItem account={account} didSelectRow={actions.didSelectRow} />
  ))
  .add('deleteAction', () => (
    <AccountListItem account={account} didSelectAccountToDelete={actions.didSelectAccountToDelete} />
  ));
