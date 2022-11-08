import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImBrightnessContrast } from 'react-icons/im'
import { MdOutlineBlurOn } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { BiFilter } from 'react-icons/bi'
import { ImContrast } from 'react-icons/im'
// import { CgDropInvert } from 'react-icons/cg'
import { changeBlur, changeBrightness, changeContrast, changeGrayscale, changeInvert, changeOpacity } from '../redux/action/filters'
import Filter from './Filter'

const Filters = () => {
    const filter=useSelector(state=>state.filter)
    const dispatch=useDispatch()

    const onChangeBrightness=(value)=>{
        dispatch(changeBrightness(value))
    }
    const onChangeBlur=(value)=>{
        dispatch(changeBlur(value))
    }
    const onChangeContrast=(value)=>{
        dispatch(changeContrast(value))
    }
    const onChangeGrayscale=(value)=>{
        dispatch(changeGrayscale(value))
    }
    const onChangeInvert=(value)=>{
        dispatch(changeInvert(value))
    }
    const onChangeOpacity=(value)=>{
        dispatch(changeOpacity(value))
    }
     const filterData=[
        {
            Icon: ImBrightnessContrast,
            name: 'Brightness',
            min: '0',
            max: '200',
            defaultV: '50',
            onChangeFunc:onChangeBrightness,
            value:filter.brightness
        },
        {
            Icon: MdOutlineBlurOn,
            name: 'Blur',
            min: '0',
            max: '10',
            defaultV: '0',
            onChangeFunc:onChangeBlur,
            value:filter.blur
        },
        {
            Icon: ImContrast,
            name: 'Contrast',
            min: '0',
            max: '200',
            defaultV: '100',
            onChangeFunc:onChangeContrast,
            value:filter.contrast
        },
        {
            Icon: ImBrightnessContrast,
            name: 'Grayscale',
            min: '0',
            max: '100',
            defaultV: '0',
            onChangeFunc:onChangeGrayscale,
            value:filter.grayscale
        },
        {
            Icon: ImBrightnessContrast,
            name: 'Invert',
            min: '0',
            max: '100',
            defaultV: '0',
            onChangeFunc:onChangeInvert,
            value:filter.invert
        },
        {
            Icon: ImBrightnessContrast,
            name: 'Opacity',
            min: '0',
            max: '100',
            defaultV: '100',
            onChangeFunc:onChangeOpacity,
            value:filter.opacity
        }
    ]
  return (
    <div className='overflow-auto w-full h-full md:block flex rounded-lg'>
        {filterData.map((item)=>{
            return (
                <Filter filterItem={item}/>
            )  
        })}
    </div>
  )
}

export default Filters