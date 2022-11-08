import React from 'react'
import { useSelector } from 'react-redux'

const Image = () => {
    const imgUrl=useSelector(state=>state.imgUrl.imageUrl)
    const filter=useSelector(state=>state.filter)
    console.log(filter);
  return (
    <div className=' bg-white w-full h-full md:p-5 p-3 rounded-lg'>
        <div className="w-full h-full  overflow-hidden">
        <img 
        src={imgUrl}
        alt="" 
        id='image'
        className="w-full h-[100%] object-contain"
        style={{
            filter:`
            brightness(${filter.brightness}%) 
            blur(${filter.blur}px) 
            contrast(${filter.contrast}%)
            grayscale(${filter.grayscale}%)
            invert(${filter.invert}%)
            opacity(${filter.opacity}%)`
        }} />
        </div>
    </div>
  )
}

export default Image