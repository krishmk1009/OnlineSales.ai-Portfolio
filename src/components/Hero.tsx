import React from "react";
import HeroImg from "../../src/assets/hero.png"

const Hero: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    backgroundImage: `url('https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/647744138b211322ab9c5626_onlinesales-monetization-platform-background.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    color: "#fff", // Set text color to contrast with the background
  };

  return (
    <div style={heroStyle} className="md:height-[540px]">
      <div className="max-w-7xl mx-auto md:flex md:py-20 py-10  text-center md:text-left">
        {/* Your hero content goes here */}
        <div className="md:w-[60%] ">
          <h1 className="md:text-[53px] text-[30px] font-muli font-semibold  leading-tight md:pt-10 md:w-full  px-6 md:px-0">
          Hire your Ideal Candidate as Frontend Developer

          </h1>
          <p className="py-6 md:px-0 px-1  md:w-[90%] font-roboto md:text-[18px]">
            Frontend Developer application, Presented by Krushna Modhave, a 2023
            Computer Engineering Graduate
          </p>
          <div className="flex md:py-2 pb-3 md:pb-0 px-4 md:px-0 ">
            <input
              className="py-2 text-black bg-white px-4 mr-3 rounded w-4/6 md:w-3/6 font-roboto"
              placeholder="Click button to download CV"
            />
            <a href="https://drive.google.com/file/d/1GbfgzxUzoQ-GbxLZTAZxlU3zN9SjiafR/view?usp=sharing" target="blank">

            <button className="py-2 text-white  px-2 md:px-4 rounded bg-gradient-to-r from-[#ffa349] to-[#f64e90] hover:bg-white font-muli ">
           Resume
            </button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex md:justify-end justify-center py-4 md:py-0">
          <img
            src={HeroImg}
            className="md:h-[400px]  h-[200px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
