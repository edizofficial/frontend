import React from 'react'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { RiArrowGoForwardFill } from 'react-icons/ri'


const RightContent = () => {
  return (
        <div className='items-center justify-evenly flex'>
          <div className=" flex">
            <div className=" flex items-center px-3">
              <div className=" pr-3"><RiArrowGoBackLine/></div>
              <div className=" font-medium">Undo</div>
            </div>
            <div className=" flex items-center px-3">
              <div className=" pr-3"><RiArrowGoForwardFill/></div>
              <div className=" font-medium">Redo</div>
            </div>
          </div>
          <div className="">
          <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className=""></div>
          </div>
          </div>
      )
    }

export default RightContent