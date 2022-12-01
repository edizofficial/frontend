import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { imageUrl } from '../../redux/action/imageUrl';
import { canvasConvert } from '../../util/downloadimg';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import { BiImageAdd } from 'react-icons/bi';
import LeftContent from '../content/LeftContent';
import Image from '../editor/Image';

const EditorContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgUrl = useSelector((state) => state.imgUrl.imageUrl);
  const filter = useSelector((state) => state.filter);
  const color = useSelector((state) => state.color.color);
  const convertUrl = (file) => {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => {
      dispatch(imageUrl(fileReader.result));
    });
    fileReader.readAsDataURL(file);
  };

  const handleDownloadImage = () => {
    canvasConvert(filter, imgUrl, color);
  };
  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-[#000000]">
      <div className=" w-full md:flex hidden h-[100vh] md:pr-5 md:pb-2 md:flex-row flex-col-reverse px-5 md:pl-0">
        <div className="md:w-96 w-full">
          <div className="h-[7%] flex justify-center items-center">
            <div className="flex justify-center">
              <button
                className=" px-5 py-1 gap-2 hover:text-[#8758FF] flex-center  rounded-full m-2 bg-[#191A19] shadow-lg"
                onClick={navigateToHome}>
                <div className="">
                  <AiFillHome />
                </div>
                <div className="md:flex hidden body-2">Home</div>
              </button>
            </div>
          </div>
          <LeftContent />
        </div>
        <div className="md:w-full w-full h-full rounded-lg">
          <div className="h-[7%] flex justify-end gap-5 items-center w-full">
            <canvas id="canvasimage" className="hidden"></canvas>
            <input
              accept="image/*"
              id="icon-button-file"
              onChange={(e) => convertUrl(e.target.files[0])}
              type="file"
              style={{ display: 'none' }}
            />
            <label htmlFor="icon-button-file">
              <div className="float-right px-5 py-1  gap-2 hover:text-[#8758FF]  flex-center   rounded-full  bg-[#191A19] shadow-lg cursor-pointer">
                <div className="">
                  <BiImageAdd />
                </div>
                <div className="md:flex hidden body-2 ">Open New Image</div>
              </div>
            </label>
            <button
              className="float-right px-5 py-1  hover:text-[#8758FF] gap-2 flex-center rounded-full bg-[#191A19] shadow-lg"
              onClick={handleDownloadImage}>
              <div className="">
                <AiOutlineDownload />
              </div>
              <div className=" md:flex hidden body-2 ">Download</div>
            </button>
            <button className="float-right px-5 py-1  hover:text-[#8758FF] gap-2 flex-center  rounded-full bg-[#191A19] shadow-lg">
              <div className="">
                <BiReset className="" />
              </div>
              <div className=" md:flex hidden body-2 ">Reset</div>
            </button>
          </div>
          <div className="lg:h-[91vh] h-[25rem] w-full bg-[#191A19] rounded-lg shadow-lg">
            <div className="  h-[100%]">
              <Image />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorContent;
