import React from 'react';
import Image from 'next/image';  

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className='outline-none border-none relative'>
      {/* Image Component */}
      <Image
        className="w-full h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt={mainTitle}
        width={1000}
        height={200}
      />

      {/* Overlay Text */}
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] translate-y-[-50%] space-y-2 lg:space-y-4 bg-[#ffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className='text-accent text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]'>{mainTitle}</h2>
        <h3 className='text-[24px] text-gray-500'>Starting at {price}</h3>

        <button className='mt-4 px-6 py-2 bg-accent text-white text-[18px] rounded-full hover:bg-blackish'>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Slide;
