import React, { useState } from 'react';
import { MdColorLens } from 'react-icons/md';
import { IoIosColorFilter } from 'react-icons/io';
import Tab from './Tab';

const LeftContent = () => {
  const [tab, setTab] = useState('filter1');
  return (
    <div className="w-full h-[91vh] flex">
      <div className="h-full md:w-10 w-full  md:pl-2 md:block flex justify-between md:px-0 px-5">
        <div
          className="bg-[#191A19] shadow-[#00000075] hover:text-xl transition-all shadow-inner shadow-4  w-8 h-8  rounded-full flex justify-center items-center mb-3 cursor-pointer"
          onClick={() => setTab('filter1')}>
          <IoIosColorFilter className="hover:text-[#8758FF]" />
        </div>
        <div
          className="bg-[#191A19] shadow-[#00000075] hover:text-xl transition-all shadow-inner shadow-4  w-8 h-8 rounded-full flex justify-center items-center mb-3 cursor-pointer"
          onClick={() => setTab('filter2')}>
          <MdColorLens className="hover:text-[#8758FF]" />
        </div>
      </div>
      <Tab activeTab={tab} />
    </div>
  );
};

export default LeftContent;
