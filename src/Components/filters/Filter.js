import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filterItem }) => {
  const [isTab, setIsTab] = useState(false);
  const onToggleTab = () => {
    setIsTab(!isTab);
  };
  return (
    <div className="px-5">
      <div
        className=" md:flex block items-center md:justify-start justify-center  py-2 font-medium"
        onClick={onToggleTab}>
        <div className="pr-2 flex justify-center">
          <filterItem.Icon />
        </div>
        <div className="w-full flex justify-between">
          <div className=" flex body-2">{filterItem.name}</div>
          <div className="w-10 text-center  font-medium border-[1px] border-black rounded-lg caption">
            {filterItem.value}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <input
          type="range"
          min={filterItem.min}
          max={filterItem.max}
          defaultValue={filterItem.defaultV}
          onChange={(e) => filterItem.onChangeFunc(e.target.value)}
          className="w-full cursor-pointer  accent-[#4a4d4a] hover:accent-[#8758FF] outline-none ring-0 "
        />
      </div>
    </div>
  );
};
Filter.propTypes = {
  filterItem: PropTypes.object
};

export default Filter;
