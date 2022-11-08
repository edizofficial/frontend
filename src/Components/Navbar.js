import React, { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { MdAdd } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { imageUrl } from '../redux/action/imageUrl'
import { canvasConvert } from '../util/downloadimg'


function Right_Content() {
  const imgUrl=useSelector(state=>state.imgUrl.imageUrl)
  const filter=useSelector(state=>state.filter)

  const dispatch=useDispatch()

  const convertUrl=(file)=>{
    const fileReader=new FileReader()
    fileReader.addEventListener("load", () => {
      dispatch(imageUrl(fileReader.result))
    });
    fileReader.readAsDataURL(file);
  }


  return (
    <div className='flex float-right items-center p-3'>
      <div className=" flex  font-medium items-center p-2 mr-2  rounded-full hover:bg-slate-400">
        <canvas id='canvasimage' className='hidden'></canvas>
        <div className=" px-2"><FiDownload /></div>
        <div className=" px-2 cursor-pointer sm:flex hidden"  id="download" onClick={()=>canvasConvert(filter,imgUrl)}>
          download
        </div>
      </div>
      <input accept="image/*" id="icon-button-file"
       onChange={(e)=>convertUrl(e.target.files[0])}
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <div className=" flex font-medium items-center cursor-pointer p-2  rounded-full hover:bg-slate-400">
          <div className=" px-2"><MdAdd /></div>
          <div className=" px-2 sm:flex hidden">Open Image</div>
        </div>
      </label>
    </div>
  )
}

export default Right_Content