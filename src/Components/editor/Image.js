import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getRenderedSize } from '../../util/getRenderedSize';

const Image = () => {
  const imgUrl = useSelector((state) => state.imgUrl.imageUrl);
  const filter = useSelector((state) => state.filter);
  const color = useSelector((state) => state.color.color);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  console.log(width);
  console.log(height);
  const updateWidthAndHeight = (e) => {
    console.log(e);
    let res = getImgSizeInfo(e.target);
    setWidth(res.width);
    setHeight(res.height);
  };

  function getImgSizeInfo(img) {
    var pos = window.getComputedStyle(img).getPropertyValue('object-position').split(' ');
    return getRenderedSize(
      true,
      img.width,
      img.height,
      img.naturalWidth,
      img.naturalHeight,
      parseInt(pos[0])
    );
  }
  return (
    <div className="w-full h-full md:p-5 p-3 rounded-lg ">
      <div className=" relative w-full h-full  overflow-hidden">
        {color === 'transparent' ? (
          <img
            src={imgUrl}
            alt=""
            id="image"
            onLoad={(e) => updateWidthAndHeight(e)}
            className={color === 'transparent' ? 'w-full h-[100%] object-contain' : 'hidden'}
            style={{
              filter: `
                      brightness(${filter.brightness}%) 
                      blur(${filter.blur}px) 
                      contrast(${filter.contrast}%)
                      grayscale(${filter.grayscale}%)
                      invert(${filter.invert}%)
                      opacity(${filter.opacity}%)
                     saturate(${filter.saturate}%)
                      sepia(${filter.sepia}%)
                      hue-rotate(${filter.huerotate}deg)`
            }}
          />
        ) : (
          <div
            style={
              color !== 'transparent'
                ? {
                    width: width,
                    height: height,
                    backgroundColor: color,
                    backgroundImage: `url(${imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    backgroundBlendMode: 'multiply',
                    margin: 'auto'
                  }
                : undefined
            }></div>
        )}
      </div>
    </div>
  );
};

export default Image;
