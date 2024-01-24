import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IArrowSlant } from '../utils/icons.utils';

const IconButton = ({ onClick, label, iconLeft, iconRight }) => {
  return (
    <div
      className="relative cursor-pointer flex items-center  px-4 py-2 bg-transparent text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
      onClick={onClick}
    >
        <span className="ml-2 bg-[#062F3F] text-base w-28 py-2 rounded-full">{label}</span>
        <div className="inverted-border-radius w-7 bg-[#062F3F] h-3 -mx-2 " />
        <div className=' bg-[#062F3F]  rounded-full '>
          <img src={IArrowSlant} alt='icon' className="icon w-7 h-7 pb-2 pl-2 pt-1 pr-1 m-1" />
        </div>
    </div>
  );
};

export default IconButton;
