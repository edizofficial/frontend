import React, { useState } from 'react'

const Filter = ({filterItem}) => { 
    const [isTab,setIsTab]=useState(false);
    const onToggleTab=()=>{
      setIsTab(!isTab);
    }
  return (
    <div className="px-5">
            <div className=" md:flex block items-center md:justify-start justify-center  py-2 font-medium" onClick={onToggleTab}>
                <div className='pr-2 flex justify-center'><filterItem.Icon/></div>
                <div className="w-full flex justify-between">
                  <div className=' flex body-1-sm  '>{filterItem.name}</div>
                  <div className="w-10 text-center  font-medium border-[1px] border-black rounded-lg">
                      {filterItem.value}
                  </div>
                </div>
            </div>
            <div className={ isTab ?"flex justify-between" : "lg:flex hidden absolute md:relative"}>
                <input 
                    type="range"
                    min={filterItem.min} 
                    max={filterItem.max} 
                    defaultValue={filterItem.defaultV} 
                    onChange={(e)=>filterItem.onChangeFunc(e.target.value)}
                    className='w-full cursor-pointer  accent-[#d2daff96] outline-none ring-0 ' />
            </div>
        </div>
  )
}

export default Filter