import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImBrightnessContrast } from 'react-icons/im';
import { MdOutlineBlurOn } from 'react-icons/md';
import { ImContrast } from 'react-icons/im';
import {
  changeBlur,
  changeBrightness,
  changeContrast,
  changeGrayscale,
  changehuerotate,
  changeInvert,
  changeOpacity,
  changeSaturate,
  changeSepia
} from '../../redux/action/filters';
import Filter from './Filter';

const Filters = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onChangeBrightness = (value) => {
    dispatch(changeBrightness(value));
  };
  const onChangeBlur = (value) => {
    dispatch(changeBlur(value));
  };
  const onChangeContrast = (value) => {
    dispatch(changeContrast(value));
  };
  const onChangeGrayscale = (value) => {
    dispatch(changeGrayscale(value));
  };
  const onChangeInvert = (value) => {
    dispatch(changeInvert(value));
  };
  const onChangeOpacity = (value) => {
    dispatch(changeOpacity(value));
  };
  const onChangeSaturate = (value) => {
    dispatch(changeSaturate(value));
  };
  const onChangeSepia = (value) => {
    dispatch(changeSepia(value));
  };
  const onChangehuerotate = (value) => {
    dispatch(changehuerotate(value));
  };
  const filterData = [
    {
      Icon: ImBrightnessContrast,
      name: 'Brightness',
      min: '0',
      max: '200',
      defaultV: '50',
      onChangeFunc: onChangeBrightness,
      value: filter.brightness
    },
    {
      Icon: MdOutlineBlurOn,
      name: 'Blur',
      min: '0',
      max: '10',
      defaultV: '0',
      onChangeFunc: onChangeBlur,
      value: filter.blur
    },
    {
      Icon: ImContrast,
      name: 'Contrast',
      min: '0',
      max: '200',
      defaultV: '100',
      onChangeFunc: onChangeContrast,
      value: filter.contrast
    },
    {
      Icon: ImBrightnessContrast,
      name: 'Grayscale',
      min: '0',
      max: '100',
      defaultV: '0',
      onChangeFunc: onChangeGrayscale,
      value: filter.grayscale
    },
    {
      Icon: ImBrightnessContrast,
      name: 'Invert',
      min: '0',
      max: '200',
      defaultV: '0',
      onChangeFunc: onChangeInvert,
      value: filter.invert
    },
    {
      Icon: ImBrightnessContrast,
      name: 'Opacity',
      min: '0',
      max: '100',
      defaultV: '100',
      onChangeFunc: onChangeOpacity,
      value: filter.opacity
    },
    {
      Icon: ImBrightnessContrast,
      name: 'Saturate',
      min: '0',
      max: '200',
      defaultV: '100',
      onChangeFunc: onChangeSaturate,
      value: filter.saturate
    },
    {
      Icon: ImBrightnessContrast,
      name: 'Sepia',
      min: '0',
      max: '100',
      defaultV: '0',
      onChangeFunc: onChangeSepia,
      value: filter.sepia
    },
    {
      Icon: ImBrightnessContrast,
      name: 'hue-rotate',
      min: '-360',
      max: '360',
      defaultV: '0',
      onChangeFunc: onChangehuerotate,
      value: filter.huerotate
    }
  ];
  return (
    <div className="overflow-auto w-72 h-full  md:block flex rounded-2xl shadow-lg mb-2 mx-2 bg-[#191A19]">
      <div className=" text-center body-1 font-bold py-3 ">Filter</div>
      {filterData.map((item) => {
        return <Filter filterItem={item} key={item.name} />;
      })}
    </div>
  );
};

export default Filters;
