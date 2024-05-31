import React from "react";
import Right from '../assets/Group4.png';
import Left from '../assets/Group6.png';
import Img1 from '../assets/img1.png';
import Img2 from '../assets/img2.png';
import Line from '../assets/Line_1.png';
import Logo from '../assets/1x/Asset_2.png';


const Lower = () => {
    return (
        <div className="relative w-full  bg-[#1E1E1E] text-white">
            {/* Right and left gradient images */}
            <img src={Right} alt="Right Gradient" className="absolute  right-0 w-auto h-auto z-0" />
            <img src={Left} alt="Left Gradient" className="absolute bottom-0 left-0 w-auto h-auto z-0" />

            <section className="hero flex justify-center items-center pt-48 text-white relative z-10">
                <div className="container flex flex-col text-center">
                    <p className="text-xl font-thin"> We're</p>
                    <h1 className="text-7xl  leading-tight font-extrabold ">NOT YOUR AVERAGE AGENCY</h1>
                    <p className="text-xl font-extralight">We're the Rebels With A Cause, Putting Creators Front And Center!</p>
                </div>
            </section>
            <div className="flex flex-wrap justify-center items-center rounded-lg pt-32  relative z-10">
    <div className="mr-8 mb-8 w-64 h-64 flex flex-col  bg-white bg-opacity-10 rounded-lg">
        <h1 className="text-5xl font-extrabold p-4  bg-opacity-10 text-gray-900" style={{ color: 'rgba(128, 128, 128, 0.5)' }}>01</h1>
        <p className=" text-white text-left px-4 font-extralight">By 2025, The Indian Creator Economy Is Slated To Hit A Whopping  <br/><span className="text-bold text-4xl font-extrabold">$10 Billion </span> <br/> As Per A RedSeer Report</p>
    </div>
    <div className="mr-8 mb-8 w-64 h-64 flex flex-col  bg-white bg-opacity-10 rounded-lg">
        <h1 className="text-5xl font-extrabold p-4 bg-opacity-10 text-gray-900" style={{ color: 'rgba(128, 128, 128, 0.5)' }}>02</h1>
        <p className=" px-4 text-lg text-white font-bold ">Creators Are Rewriting The Rules</p>
        <p className="px-4 font-extralight ">exploring new monetization avenues and forging bold partnerships</p>
    </div>
    <div className="mr-8 mb-8 w-64 h-64 flex flex-col  bg-white bg-opacity-10 rounded-lg">
        <h1 className="text-5xl font-extrabold top-0 p-4  left-0 bg-opacity-10 text-gray-900" style={{ color: 'rgba(128, 128, 128, 0.5)' }}>03</h1>
        <p className=" font-extralight text-white px-4">The <span className="font-bold text-lg"> Government</span> is Stepping Up With Initiatives Like The <span className="font-bold text-lg">National Creators Awards</span>, Actively Supporting And Engaging In The <span className="font-bold text-lg">Creator Community</span></p>
    </div>
   
</div>
<div className="flex justify-center items-center h-screen pt-48 relative">
  <div className="flex flex-col lg:flex-row w-[950px] bg-transparent justify-center px-11 rounded-lg pt-[600px]  lg:pt-[100px] md:pt-[100px]">
    {/* Left Section */}
    <div className="flex-1.5 lg:mr-6 mb-6 lg:mb-0">
      <div className="bg-orange-500 p-6 rounded-lg mb-6">
        <h2 className="text-white text-2xl p-2 font-extralight">Among Millions, Only</h2>
        <h1 className="text-white text-4xl p-2 font-extrabold">150K <br/>Creators</h1>
        <p className="text-white p-1 font-extrathin text-2xl pr-6 mt-2">
          Are Cashing In On The Indian Content Craze!
        </p>
        <p className="text-white text-md mt-1 px-2 bottom-0 right-[0px]  font-extralight">(2022 FICCI-EY Report)</p>
      </div>
      <div className="flex flex-col lg:flex-row ">
      <div style={{backgroundImage: `url(${Img1})`, backgroundSize: 'cover'}} className="flex-1 h-[250px] lg:h-auto text-white p-6 rounded-lg mb-3 lg:mb-0 lg:mr-3">

          <h3 className="text-xl font-extralight"><span className="font-extrabold">Creator-Led Campaigns</span> Are Not Just Trends;</h3>
          <p className="text-md mt-2 font-extralight">
            They Represent A Fundamental Shift In <span className="font-bold">How Brands Connect With Their Audience</span> Digitally.
          </p>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="bg-black text-white p-6 rounded-lg mb-3">
            <h3 className="text-3xl font-extrabold">20-30%</h3>
            <p className="text-sm font-extralight mt-2">
              Of Customers Acquired Through Creators Are Repeat Buyers
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg">
            <h3 className="text-3xl font-extrabold">$2.5B+</h3>
            <p className="text-sm mt-2">
              Invested In Indian Creator Startups Between 2018 And 2022
            </p>
            <p className="text-[0.75rem] text-right font-extralight mt-1">(Venture Capitalist Report)</p>
          </div>
        </div>
      </div>
    </div>
    {/* Right Section */}
    <div className="flex-2 flex flex-col justify-between mb-6 lg:mb-0">
      <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-6 flex items-center justify-center">
        <div>
          <h3 className="text-white text-xl font-extrathin text-left p-1">Creator-Recommended Products Sell</h3>
          <h2 className="text-white text-xl font-extralight mt-2 text-left"><span className="text-3xl font-extrabold">3-5 Times</span> <br/>Better Than The Rest!</h2>
        </div>
      </div>
      <div style={{backgroundImage: `url(${Img2})`}} className="relative bg-gradient-to-r p-6 rounded-lg h-[250px] lg:h-auto">
        <div className="relative z-10">
          <h2 className="text-white text-5xl font-bold"><span className="text-xl font-extralight">Over</span> <br/>500 MILLION</h2> <br/>
          <p className="text-white text-[1.2em] font-extralight">Indians Watch Creator Content Daily</p>
          <p className="text-white text-sm text-right bottom-0 font-extralight mt-1">(RedSeer Report)</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="w-full pt-[700px] md:pt-[400px] lg:pt-48 box-border bg-gradient-radial relative from-orange-500 to-gray-900 text-white text-center min-h-screen flex flex-col justify-center">
  <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:space-x-10">
    <div className="my-10 md:my-0 md:ml-24 md:mr-16">
      <h1 className="text-3xl md:text-left md:text-6xl font-extrabold leading-tight">ARE YOU<br />THE X?</h1>
    </div>
    <div className="mt-10 md:mt-0 md:pl-5 text-center md:text-left">
      <h2 className="text-xl md:text-2xl mb-2 font-bold">Who Is X?</h2>
      <p className="text-base font-extralight md:text-lg"><span className="font-bold">X</span> Is Anyone Who Wants To Change The Status Quo And Build Something Big!</p>
    </div>
  </div>
  <div className="my-6">
  <a href="mailto:Founder@markupxbrands.com" className="bg-gradient-to-r from-orange-500 to-red-700 px-20 py-4 text-lg text-white rounded-full transition duration-300 hover:bg-red-600">
  Become the X
</a>

  </div>
  <div className="my-10">
    <img src={Line} alt="Divider Line" className="w-full" />
  </div>
  <div className="mt-8">
    <div className="mb">
      <h2 className="text-3xl mb-1 font-extrabold">BUILD OUT LOUD</h2>
      <img src={Logo} alt="MARKUP Logo" className="mx-auto" />
    </div>
    <div className="bg-[#1E1E1E] w-full h-[20px] flex justify-around items-center py-5">
      <div>
        <p className="text-base">+91 9599272272</p>
      </div>
      <div>
        <p className="text-base">query.markupX@gmail.com</p>
      </div>
      <div>
        <p className="text-base">Our Handles</p>
      </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default Lower;
