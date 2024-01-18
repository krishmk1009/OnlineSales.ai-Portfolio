import React from "react";

const Feature1: React.FC = () => {
  return (
    <div>
      <div className=" flex py-10">
        {/* Your hero content goes here */}
        <div className="w-1/2 ">
          <h3 className="text-[40px] leading-tight pt-20 w-4/5">
            Invest better with domain experts and{" "}
            <span className="text-[#1F75FE]">go live in weeks!</span>
          </h3>
          <p className="py-6 pr-10">
          Your platform, built by us, to your specifications - and at a fraction of the time and cost it takes to build in-house.

          </p>
          <div className="flex py-2">
            
            <button className="h-10 font-semibold text-white bg-white px-4 bg-[#1F75FE] rounded-xl ">
             Talk to an Expert
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64f07b6414828ebfdab583df_1.png"
            className="h-[470px] w-[620px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Feature1;
