import React from "react";

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
        <div className="md:w-1/2 ">
          <h1 className="md:text-[53px] text-[30px] leading-tight md:pt-10 md:w-full  px-6 md:px-0">
            Experience the Future of Retail Media Monetization
          </h1>
          <p className="py-6 md:px-0 px-1 ">
            Built by former Amazon ad-tech experts, OnlineSales.ai can help
            boost retailers' profitability by 7%+ of Sales!
          </p>
          <div className="flex md:py-2 pb-3 md:pb-0 px-4 md:px-0 ">
            <input
              className="h-10 text-black bg-white px-4 mr-3 rounded w-4/6 md:w-3/6"
              placeholder="Enter your email address"
            />
            <button className="h-10 text-white  px-2 md:px-4 rounded bg-gradient-to-r from-[#ffa349] to-[#f64e90] hover:bg-white ">
           Get Started
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex md:justify-end justify-center py-4 md:py-0">
          <img
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64f07b65baf89f6462cf3c61_Banner%20image.png"
            className="md:h-[400px] md:w-5/6 h-[200px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
