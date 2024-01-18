import React from "react";
import Feature1 from "./Features/Feature1";
import Feature2 from "./Features/Feature2";

const Feature: React.FC = () => {
  return (
    <div>
      <div className="max-w-[85rem] mx-auto">
        <Feature1 />
      </div>
      <div className="bg-[#F6F6F6]">
        <div className="max-w-[85rem] mx-auto">
          <Feature2 />
        </div>
      </div>
    </div>
  );
};

export default Feature;
