import React from "react";
import IconLinkedinCircled from "../../Icons/Linkedin";
import IconTwitterCircle from "../../Icons/Twitter";
import IconBxlFacebookCircle from "../../Icons/Facebook";

// Define a type for the dynamic classes
interface DynamicClasses {
  [key: string]: string;
}

const Footer: React.FC = () => {
  // Define dynamic classes using an object
  const dynamicClasses: DynamicClasses = {
    container: "bg-[#F6F6F6] py-10",
    logoContainer: "w-[28%]",
    logo: "h-[77px] w-[146px]",
    icon: "h-[44px] w-[44px]",
    column: "w-1/6 mx-2 mt-3",
    heading: "text-[16px] font-semibold mb-3",
    listItem: "pb-1 text-[14px]",
  };

  // Define data for the remaining sections
  const sectionsData = [
    {
      heading: "Monetize",
      items: ["Solutions", "Features", "Resources"],
    },
    {
      heading: "Resources",
      items: ["Blog", "Features", "Documentation"],
    },
    {
      heading: "Company",
      items: ["Contact Us", "Career", "Resources"],
    },
    {
      heading: "Policy",
      items: ["Privacy Policy", "Cookie Policy", "GDPR"],
    },
  ];

  return (
    <div>
      <div className={dynamicClasses.container}>
        <div className="max-w-[70rem] mx-auto">
          <div className="flex">
            <div className={dynamicClasses.logoContainer}>
              <img
                src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/635a67fba344100c9e90cc90_OnlineSales_Logo_updated_Vertical-p-500.png"
                className={dynamicClasses.logo}
              />
              <div className="flex">
                <div className="my-4 mr-1">
                  <img
                    src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64c77e3fcde15b04c0e9adf6_onlinesales-retail-monetization-soc2.png"
                    className={dynamicClasses.icon}
                  />{" "}
                </div>
                <div className="my-4 mx-1">
                  <img
                    src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64c77e3e5e16ad33cb89f267_onlinesales-retail-monetization-gdpr.png"
                    className={dynamicClasses.icon}
                  />{" "}
                </div>
                <div className="my-4 mx-1">
                  <img
                    src="https://assets-global.website-files.com/61a0c5dbad4af846792cc63c/64c77e3f05fabb12a5e888e7_onlinesales-retail-monetization-iso27001.png"
                    className={dynamicClasses.icon}
                  />{" "}
                </div>
              </div>
            </div>

            {/* Use map to generate remaining columns dynamically */}
            {sectionsData.map((section, index) => (
              <div key={index} className={dynamicClasses.column}>
                <p className={dynamicClasses.heading}>{section.heading}</p>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <p key={itemIndex} className={dynamicClasses.listItem}>
                      {item}
                    </p>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[70rem] mx-auto flex justify-between py-5">
        <div>
          <p>© 2022 OnlineSales.ai, All rights reserved</p>
        </div>

        <div className="flex">
          <div className="mx-2">
            <IconBxlFacebookCircle />
          </div>
          <div className="mx-2">
            <IconTwitterCircle />{" "}
          </div>
          <div className="mx-2">
            <IconLinkedinCircled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
