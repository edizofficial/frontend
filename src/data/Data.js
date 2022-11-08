import React from 'react'
import { BiFilter } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
    
export const Filters = () => {
     const Data=[
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
}