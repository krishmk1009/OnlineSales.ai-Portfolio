import React from "react";

const Feature2: React.FC = () => {
  return (
    <div>
      <div className=" flex py-10">
        {/* Your hero content goes here */}

        <div className="w-1/2 flex  ">
          <img
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64f07b65b96cd1b870701eda_4.png"
            className="h-[470px] w-[620px] "
          />
        </div>
        <div className="w-1/2 pl-10 pt-10 ">
          <h3 className="text-[40px] leading-tight pt-20 w-[90%]">
            Achieve 10x brand experience with a fully{" "}
            <span className="text-[#1F75FE]">self-serve platform</span>
          </h3>
          <p className="py-6 pr-10">
            Simplify ad buying with AI and ML, leading to higher ad spends;
            while admin controls keep you firmly in the driver’s seat.
          </p>
          <div className="flex py-2">
            <button className="h-10 font-semibold text-white  px-4 bg-[#1F75FE] rounded-xl ">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex pb-10">
        <div className="w-1/4 mx-7 ">
          <h3 className="text-[25px] text-[#1F75FE] my-3 leading-tight">
            White-labeled & Self-Serve
          </h3>
          <p className="text-[16px]">
            Our fully white-labeled platform unlocks brands of all tiers with a
            self-serve and scalable solution.
          </p>
        </div>
        <div className="w-1/4 mx-7 ">
          <h3 className="text-[25px] text-[#1F75FE] my-3 leading-tight">
            White-labeled & Self-Serve
          </h3>
          <p className="text-[16px]">
            Our fully white-labeled platform unlocks brands of all tiers with a
            self-serve and scalable solution.
          </p>
        </div>
        <div className="w-1/4 mx-7 ">
          <h3 className="text-[25px] text-[#1F75FE] my-3 leading-tight">
            White-labeled & Self-Serve
          </h3>
          <p className="text-[16px]">
            Our fully white-labeled platform unlocks brands of all tiers with a
            self-serve and scalable solution.
          </p>
        </div>
        <div className="w-1/4 mx-7 ">
          <h3 className="text-[25px] text-[#1F75FE] my-3 leading-tight">
            White-labeled & Self-Serve
          </h3>
          <p className="text-[16px]">
            Our fully white-labeled platform unlocks brands of all tiers with a
            self-serve and scalable solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
