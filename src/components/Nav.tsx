import React from "react";

const Nav: React.FC = () => {
  return (
    <div className="bg-black h-16 p-4 text-white ">
      <div className="max-w-7xl mx-auto bg flex justify-between">
        <div>
          <img
            src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/647731d37f21e99693cc40b6_onlinesales-monetization-platform-os-logo.png"
            className="md:w-44 w-40"
          />
        </div>

        <div className="flex ">
          <ul className="md:flex hidden ">
            <li className="px-4 mx-4 pt-1">home</li>
            <li className="px-4 mx-4 pt-1">home</li>
            <li className="px-4 mx-4 pt-1">home</li>
            <li className="px-4 mx-4 pt-1">home</li>
            <button className="h-10 text-black bg-white px-4 rounded">Schedule A Demo</button>
          </ul>
       
       
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
