import React from "react";
import Feat1 from "../../../assets/feat1.png"


const Feature1: React.FC = () => {
  return (
    <div>
      <div className=" md:flex md:py-10 mt-5 md:mt-0">
        {/* Your hero content goes here */}
        <div className="md:w-1/2 px-4 md:px-0 text-center md:text-left">
          <h3 className="md:text-[40px] text-[22px]  leading-tight md:pt-20 md:w-[90%] font-muli">
          Online Salon Booking Platform: 

            <span className="text-[#1F75FE]">Freelon</span>
          </h3>
          <p className="md:py-6 py-3 md:pr-10 font-roboto">
          Led the successful implementation of a salon booking platform in Ahmednagar.

          Expanded the user base by partnering with 20+ professional salons.


          </p>
          <div className="md:flex py-2 font-muli">
            <button className="h-10 font-semibold text-white  px-4 bg-[#1F75FE] rounded-xl ">
              Talk to an Expert
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex md:justify-end justify-center my-4 md:my-0 mr-8 md:mr-0">
          <img
            src={Feat1}
            className="md:h-[470px] md:w-[620px] h-[200px]  "
          />
        </div>
      </div>
    </div>
  );
};

export default Feature1;
