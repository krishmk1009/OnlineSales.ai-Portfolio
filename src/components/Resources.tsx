import React from "react";

// Define a type for styles
interface Styles {
  container: string;
  title: string;
  blogContainer: string;
  blogText: string;
  hr: string;
  postTitle: string;
  button: string;
  seeAllButton: string;
}

// Define static styles
const styles: Styles = {
  container:
    "bg-[#333333] bg-gradient-to-r from-[#0f1332] to-[#2c163b] py-20 mt-10 text-white",
  title: "text-center text-[40px] font-muli",
  blogContainer: "md:w-1/3 mx-4 my-5 md:my-0",
  blogText: "text-[16px] md:py-4 py-2 font-roboto",
  hr: "w-[95%]",
  postTitle: "md:py-5 py-2 md:text-[25px] text-[22px] font-muli",
  button:
    "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm md:py-6 py-3 inline-flex items-center font-roboto",
  seeAllButton:
    "h-10 rounded-md text-white bg-white px-4 bg-gradient-to-r from-[#ffa349] to-[#f64e90] font-muli",
};
const Resources: React.FC = () => {
  // Define an array of objects with different content
  const resourcesData = [
    {
      blogText: "First",
      postTitle: "Graduate Engineer Trainee at Vodaone Intelligent Solutions ",
      time : "Aug 2023 - Present"
    },
    {
      blogText: "Second",
      postTitle: "Web Developer & Designer at Wealo Studio",
      time : "Dec 2022 - Feb 2023"
    },
    {
      blogText: "Third",
      postTitle: "Wordpress Developer  at CyberArtLab",
      time : "Sep 2022 - Feb 2023"

    },
  ];

  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto">
        <h3 className={styles.title}>Professional Journey Highlights</h3>

        <div className="md:flex md:my-10">
          {resourcesData.map((data, index) => (
            <div key={index} className={styles.blogContainer}>
              <p className={styles.blogText}>{data.blogText}</p>
              <hr className={styles.hr} style={{ opacity: "40%" }} />
              <h4 className={styles.postTitle}>{data.postTitle}</h4>
              <button type="button" className={styles.button}>
              {data.time}
                
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button className={styles.seeAllButton}>Linkedin Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Resources;