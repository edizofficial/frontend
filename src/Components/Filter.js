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
                <div className=' flex body-1-sm  '>{filterItem.name}</div>
            </div>
            <div className={ isTab ?"flex justify-between" : "lg:flex hidden absolute md:relative"}>
                <input 
                    type="range"
                    min={filterItem.min} 
                    max={filterItem.max} 
                    defaultValue={filterItem.defaultV} 
                    onChange={(e)=>filterItem.onChangeFunc(e.target.value)}
                    className='w-[80%] cursor-pointer mr-3 accent-[#8300ca]' />
                <div className="w-[15%] text-center  font-medium border-[2px] border-gray-200">
                    {filterItem.value}
                </div>
            </div>
        </div>
  )
}

export default Filter