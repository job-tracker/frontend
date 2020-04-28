import React from 'react';

import './ListHeader.scss';

import HeaderTitle from './HeaderTitle.js';
import Button from '../../Buttons/Button.js';

const ListHeader = ({ headerTitle, btnTitle }) => {
  return (
    <div className="list-header">
      <HeaderTitle title={headerTitle} />
      <Button title={btnTitle} />
    </div>
  );
};
export default ListHeader;
