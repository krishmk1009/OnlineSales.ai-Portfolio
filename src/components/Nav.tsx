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
          <ul className="md:flex hidden  font-roboto">
            <li className="px-4 mx-4 pt-1">Solutions</li>
            <li className="px-4 mx-4 pt-1">Products</li>
            <li className="px-4 mx-4 pt-1">Resources</li>
            <li className="px-4 mx-4 pt-1">Hyperlocal</li>
            <a href="https://github.com/krishmk1009" target="blank">

            <button className="h-10 text-black bg-white px-4 rounded">Visit Github</button>
            </a>
          </ul>
       
       
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
