import React from 'react';
import Right from '../assets/Group1.png';
import Left from '../assets/Group2.png';
import Grid from '../assets/grid.png';
import OuterRing from '../assets/scroll/Frame 9.png';
import InnerRing from '../assets/scroll/Frame 8.png';
import RoundText from '../assets/scroll/Group 3.png';
import Logo from '../assets/1x/Asset_21.png';
import empoweringIcon from '../assets/plant.png';
import educatingIcon from '../assets/book.png';
import evangelizingIcon from '../assets/speaker.png';
import orange from '../assets/red.png';
import red from '../assets/orange_strip.png';

const GradientBackground = () => {
  return (
    <div className="relative min-h-screen bg-[#1E1E1E] text-white overflow-hidden">
      {/* Right and left gradient images */}
      <img src={Right} alt="Right Gradient" className="absolute top-0 right-0 w-auto h-auto" />
      <img src={Left} alt="Left Gradient" className="absolute bottom-0 left-0 w-auto h-auto" />

      {/* Grid image */}
      <img src={Grid} alt="Grid" className="absolute top-[250px] left-0 w-full h-auto z-20 pointer-events-none hidden sm:block" />

      {/* Text */}
      <div className="absolute pt-48 left-1/2 transform -translate-x-1/2 text-center z-50">
        <p className="font-sans font-extrabold text-6xl md:text-7xl lg:text-8xl leading-tight">
          BUILDIN’ OUT LOUD!
        </p>
        <p className="mt-5 px-4 md:px-20 lg:px-32 font-sans font-light text-xl md:text-2xl lg:text-3xl leading-snug">
          Joining forces with content creators to build the D2C brands of tomorrow
        </p>
      </div>

      {/* Images stacked on top of each other */}
     
 <div className="pt-[600px] md:pt-[700px] lg:pt-[500px] flex justify-center z-40">
        <div className="relative w-[150px] sm:w-[100px] md:w-[130px] lg:w-[150px] h-[150px] sm:h-[100px] md:h-[130px] lg:h-[150px]">
          <img src={OuterRing} alt="Outer Ring" className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2" />
          <img src={InnerRing} alt="Inner Ring" className="absolute top-1/2 left-1/2 w-[70%] h-[70%] transform -translate-x-1/2 -translate-y-1/2" />
          <img src={RoundText} alt="Round Text" className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Flex container */}
      <div className="relative pt-20 px-4 md:px-[150px] flex flex-col md:flex-row md:items-center z-30">
        <div className="flex-grow flex-shrink-0 w-full md:w-[95vh] mb-8 md:mb-0 md:mr-8">
          <div className="text-white px-6 rounded-lg text-left">
            <img src={Logo} alt="MARKUP" className="mb-4" />
            <h1 className="text-4xl font-bold mb-8">
              The Co-Founder You Always <br /> Wanted :)
            </h1>
            <p className="mb-8 font-extralight text-xl">
              MarkupX is your ultimate launchpad to <br /> launch & scale your D2C brand.
            </p>
            <p className="mb-4 font-extralight text-xl">
              We believe creator-led brands are about to become the cool kids on the <br /> D2C block, outnumbering the traditional D2C Brands.
            </p>
            <br />
            <a href="mailto:Founder@markupxbrands.com" className="text-white py-2 px-4 rounded-full hover:opacity-90" style={{ background: 'linear-gradient(to right, orange, red)' }}>
  Let's Connect
</a>

          </div>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-8">
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-50 p-4 rounded-full mb-2">
              <img src={empoweringIcon} alt="Empowering Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-lg font-bold">Empowering</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-50 p-4 rounded-full mb-2">
              <img src={educatingIcon} alt="Educating Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-lg font-bold">Educating</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white bg-opacity-50 p-4 rounded-full mb-2">
              <img src={evangelizingIcon} alt="Evangelizing Icon" className="w-12 h-12" />
            </div>
            <h2 className="text-lg font-bold">Evangelizing</h2>
          </div>
        </div>
      </div>

      {/* Bands */}
      <div className="relative mt-20  pb-48 ">
        <img className="absolute top-0 w-full cursor-pointer hover:shadow-outline" src={orange} alt="Orange Background" />
        <img className="absolute top-0 w-full" src={red} alt="Red Background" />
      </div>
    </div>
  );
};

export default GradientBackground;
