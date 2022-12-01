import React from 'react';
import PropTypes from 'prop-types';
import Filter2 from '../filters/Filter2';
import Filter3 from '../filters/Filter3';
import Filter4 from '../filters/Filter4';
import Filter5 from '../filters/Filter5';
import Filters from '../filters/Filters';

const Tab = ({ activeTab }) => {
  switch (activeTab) {
    case 'filter1':
      return <Filters />;
    case 'filter2':
      return <Filter2 />;
    case 'filter3':
      return <Filter3 />;
    case 'filter4':
      return <Filter4 />;
    case 'filter5':
      return <Filter5 />;
    default:
      break;
  }
};
Tab.propTypes = {
  activeTab: PropTypes.string
};

export default Tab;
