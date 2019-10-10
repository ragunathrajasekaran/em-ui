/**
 *
 * AccountDetail
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import * as PropTypes from 'prop-types';

function AccountDetail(account) {
  if (account.title === undefined) {
    return (
      <Typography paragraph>
        Please Provide Account Info To View In The Details
      </Typography>
    );
  }

  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        {account.title.toUpperCase()}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {account.desc}
      </Typography>
      <Divider />
      <Divider />
      <Typography variant="h3" gutterBottom align="right">
        TOTAL : {account.total}
      </Typography>
      <Divider />
      <Divider />
    </React.Fragment>
  );
}

AccountDetail.propTypes = {
  title: PropTypes.string,
};

export default AccountDetail;
