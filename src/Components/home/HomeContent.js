import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { imageUrl } from '../../redux/action/imageUrl';

const HomeContent = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const navigateToEditor=()=>{
        navigate('/editor')
    }
    const convertUrl=(file)=>{
        const fileReader=new FileReader()
        fileReader.addEventListener("load", () => {
          dispatch(imageUrl(fileReader.result,navigateToEditor))
        });
        fileReader.readAsDataURL(file);
    }
  return (
    <div className='bg-[#D2DAFF] h-[100vh] w-[100vw] flex items-center justify-center'>
        <div className="">
            <canvas id='canvasimage' className='hidden'></canvas>
            <input 
                accept="image/*" 
                id="icon-button-file"
                onChange={(e)=>convertUrl(e.target.files[0])}
                type="file" style={{ display: 'none' }} 
            />
            <label htmlFor="icon-button-file">
            <div className="float-right px-10 py-3  rounded-full m-2 bg-[#8758FF] shadow-lg cursor-pointer text-white">Upload Image</div>
            </label>
        </div>
    </div>
  )
}

export default HomeContent