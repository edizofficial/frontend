import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../data/colorLayerData';
import { updateColor } from '../../redux/action/color';

const Filter2 = () => {
  const imgUrl = useSelector((state) => state.imgUrl.imageUrl);
  const dispatch = useDispatch();
  const setColor = (color) => {
    dispatch(updateColor(color));
  };
  const [isImageLoaded, setLoading] = useState(false);
  const img = new Image();
  img.src = imgUrl;
  img.onload = () => {
    setLoading(true);
  };
  return (
    <div className="overflow-auto w-72 h-full md:block flex rounded-2xl shadow-lg mb-2 mx-2  pb-10 bg-[#191A19]">
      <div className=" py-5 text-center font-bold">colors</div>
      <div className="grid grid-cols-2 px-5 gap-5 mb-10 h-[90%] overflow-auto">
        {colors.map((ele) => {
          if (isImageLoaded) {
            return (
              <div
                className="relative w-full aspect-square bg-black col-span-1 rounded-lg"
                onClick={() => setColor(ele)}
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: '100% 100%',
                  backgroundColor: ele,
                  backgroundBlendMode: 'multiply'
                }}
                key={ele}></div>
            );
          } else {
            return (
              <div
                className="w-full aspect-square bg-[#2d2f2d] animate-pulse rounded-lg"
                key={ele}></div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Filter2;
