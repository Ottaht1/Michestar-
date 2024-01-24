import React from 'react';
import { IArrowSlant, IAppleStore, IPlayStore  } from '../utils/icons.utils';

const IconButtonAppDownload = ({ onClick, label, iconLeft, iconRight }) => {
  return (
    <div
      className="relative cursor-pointer flex items-center  px-4  bg-transparent text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
      onClick={onClick}
    >
        <span className="ml-2 bg-[#062F3F] text-base w-32 py-2 rounded-full">{label}</span>
        <div className="inverted-border-radius w-6 bg-[#062F3F] h-3 -mx-2 " />
        <div className=' bg-[#062F3F]  rounded-full '>
          <img src={IPlayStore} alt='icon' className="icon w-9 h-9 m-1" />
        </div>
        <div className="inverted-border-radius w-6 bg-[#062F3F] h-3 -mx-2 " />
        <div className=' bg-[#062F3F]  rounded-full '>
          <img src={IAppleStore} alt='icon' className="icon w-9 h-9  m-1" />
        </div>
    </div>
  );
};

export default IconButtonAppDownload;
