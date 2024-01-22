import React from "react";
import devIcon from "../assets/icons/dev.png";
import dev2Icon from "../assets/icons/dev2.png";
import box from "../assets/icons/box.png";
import leader from "../assets/icons/leader.png";

// Type alias for stat data
type Stat = {
  icon: string;
  title: string;
  description: string;
};

// Data object containing information about each stat
const statsData: Stat[] = [
  {
    icon: devIcon,
    title: "FullStack Skills",
    description: "in MERN/Django/Php",
  },
  {
    icon: dev2Icon,
    title: "Blockchain Dev",
    description: "using Solidity & Ethereum",
  },
  {
    icon: leader,
    title: "Leadership Skills",
    description: "Exp in 4+ Startup",
  },
  {
    icon: box,
    title: "Out of the Box",
    description: "Passionate About Startup",
  },
];

const Stats: React.FC = () => {
  return (
    <div className="md:max-w-[85rem] mx-auto bg-[#333333] md:my-10 py-10 text-white md:rounded-[1rem]">
      <h2 className="text-center md:pb-10 pb-5 text-[22px] md:text-[40px] md:px-16 px-4  leading-tight font-muli">
        A MERN stack developer with a passion for
        <span className="text-[#FCEB86]"> Coding ,Startups</span> and a proven track record in leading startups
      </h2>
      <div className="flex justify-center md:w-5/6 mx-auto px-1 md:px-0 flex-col md:flex-row">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center md:w-1/2 w-full mx-2 md:order-[index + 1] my-3 md:my-0">
            <img
              className="mx-auto h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] my-2 md:my-0"
              src={stat.icon}
              alt="Ad Revenue Icon"
            />
            <h3 className="md:text-[30px] md:mt-2  text-[#FCEB86] font-muli">{stat.title}</h3>
            <p className="md:text-[18px] font-roboto">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
