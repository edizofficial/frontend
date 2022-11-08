import React from 'react'

const LeftContent = () => {
  return (
    <div className='bg-white overflow-auto w-full h-full md:block flex rounded-lg'>
        <div className="   px-3 py-4 flex justify-center items-center">
        <div className="body-1-md flex items-center ">
            <div className=" text-lg px-2"><BiFilter/></div>
            <div className=" font-semibold text-lg pr-5">Filters</div>
        </div>
            <div className=" hover:rotate-180"><IoIosArrowDown/></div>
        </div>
   </div>
  )
}

export default LeftContent