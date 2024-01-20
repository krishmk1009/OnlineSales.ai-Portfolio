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
  container: "bg-[#333333] bg-gradient-to-r from-[#0f1332] to-[#2c163b] py-20 mt-10 text-white",
  title: "text-center text-[40px]",
  blogContainer: "w-1/3 mx-4",
  blogText: "text-[16px] py-4",
  hr: "w-[95%]",
  postTitle: "py-5 text-[25px]",
  button: "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-6 inline-flex items-center",
  seeAllButton: "h-10 rounded-md text-white bg-white px-4 bg-gradient-to-r from-[#ffa349] to-[#f64e90]",
};

const Resources: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="max-w-7xl mx-auto">
        <h3 className={styles.title}>Resources</h3>

        <div className="flex my-10 ">
          {[1, 2, 3].map((index) => (
            <div key={index} className={styles.blogContainer}>
              <p className={styles.blogText}>Blog</p>
              <hr className={styles.hr} style={{ opacity: "40%" }} />
              <h4 className={styles.postTitle}>
                Closed-Loop Attribution: The Key to Unlocking Higher ROAS
              </h4>
              <button
                type="button"
                className={styles.button}
              >
                Read More
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button className={styles.seeAllButton}>
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
