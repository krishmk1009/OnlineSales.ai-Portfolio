import React from "react";

const Hero: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    backgroundImage: `url('https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/647744138b211322ab9c5626_onlinesales-monetization-platform-background.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "540px", // Set the desired height

    color: "#fff", // Set text color to contrast with the background
  };

  return (
    <div style={heroStyle}>
      <div className="max-w-7xl mx-auto flex py-20">
        {/* Your hero content goes here */}
        <div className="w-1/2 ">
          <h1 className="text-[53px] leading-tight pt-10">Experience the Future of Retail Media Monetization</h1>
          <p className="py-6">Built by former Amazon ad-tech experts, OnlineSales.ai can help boost retailers' profitability by 7%+ of Sales!</p>
          <div className="flex py-2">

        <input className="h-10 text-black bg-white px-4 mr-3 rounded" placeholder="Enter your email address" />
        <button className="h-10 text-white bg-white px-4 bg-gradient-to-r from-[#ffa349] to-[#f64e90] ">Schedule A Demo</button>

          </div>
        </div >
        <div className="w-1/2 flex justify-end">
          <img
            
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64f07b65baf89f6462cf3c61_Banner%20image.png"
            className="h-[400px] w-5/6 "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
