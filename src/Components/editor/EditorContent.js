import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageUrl } from '../../redux/action/imageUrl'
import { canvasConvert } from '../../util/downloadimg'
import LeftContent from '../Content/LeftContent'
import Filters from '../Filters'
import Image from '../Image'

const EditorContent = () => {
    const dispatch=useDispatch();
    const imgUrl=useSelector(state=>state.imgUrl.imageUrl)
    const filter=useSelector(state=>state.filter)
    const convertUrl=(file)=>{
        const fileReader=new FileReader()
        fileReader.addEventListener("load", () => {
          dispatch(imageUrl(fileReader.result))
        });
        fileReader.readAsDataURL(file);
    }

    const handleDownloadImage=()=>{
        canvasConvert(filter,imgUrl);
    }
    
  return (
    <div className="bg-[#8758FF] w-full h-[100vh] flex md:pr-5 md:py-5 md:flex-row flex-col-reverse p-5 md:pl-0">
      <div className="md:w-[25%] w-full">
        <div className="h-[10%]"></div>
        <div className="w-full h-[90%] flex">
          <LeftContent/>
          <Filters/>
        </div>
      </div>
      <div className="md:w-[75%] w-full h-full bg-[#D2DAFF] rounded-lg">
        <div className="h-[10%] flex justify-end items-center">
        <canvas id='canvasimage' className='hidden'></canvas>
            
        <input accept="image/*" id="icon-button-file"
       onChange={(e)=>convertUrl(e.target.files[0])}
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
      <div className="float-right px-5 py-1  rounded-full m-2 bg-white shadow-lg cursor-pointer">Upload Image</div>
        
      </label>
        <button className="float-right px-5 py-1  rounded-full m-2 bg-white shadow-lg" onClick={handleDownloadImage}>Download</button>
        </div>
        <div className="h-[90%] w-full">
          <Image/>
        </div>
      </div>
    </div>
  )
}

export default EditorContent