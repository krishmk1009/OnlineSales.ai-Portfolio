import React from "react";

const Stats: React.FC = () => {
  return (
    <div className="max-w-[85rem] mx-auto bg-[#333333] my-10 py-10 text-white rounded-[1rem]">
      <h2 className="text-center pb-10 text-[40px] px-16 leading-tight">
        Turn connected spaces into ad inventories and earn{" "}
        <span className="text-[#FCEB86]">7% of total sales</span> in ad
        revenues.
      </h2>
      <div className="flex justify-center">
        <div className="text-center mx-14">
          <img 
            className="mx-auto h-[5rem] w-[5rem]"
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64f708c1e96542ec9bf3524d_Homepage%20icon_ad%20revenue.png"
            alt="Ad Revenue Icon"
          />
          <h3 className="text-[30px] text-[#FCEB86]">3X Increase</h3>
          <p className="text-[18px]">in ad revenues</p>
        </div>
        <div className="text-center mx-14">
          <img
            className="mx-auto h-[5rem] w-[5rem]"
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64f708c1e96542ec9bf3524d_Homepage%20icon_ad%20revenue.png"
            alt="Ad Revenue Icon"
          />
          <h3 className="text-[30px] text-[#FCEB86]">3X Increase</h3>
          <p className="text-[18px]">in ad revenues</p>
        </div>
        <div className="text-center mx-14 ">
          <img
            className="mx-auto h-[5rem] w-[5rem]"
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64f708c1e96542ec9bf3524d_Homepage%20icon_ad%20revenue.png"
            alt="Ad Revenue Icon"
          />
          <h3 className="text-[30px] text-[#FCEB86]">3X Increase</h3>
          <p className="text-[18px]">in ad revenues</p>
        </div>
        <div className="text-center mx-14">
          <img
            className="mx-auto h-[5rem] w-[5rem]"
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64f708c1e96542ec9bf3524d_Homepage%20icon_ad%20revenue.png"
            alt="Ad Revenue Icon"
          />
          <h3 className="text-[30px] text-[#FCEB86]">3X Increase</h3>
          <p className="text-[18px]">in ad revenues</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
