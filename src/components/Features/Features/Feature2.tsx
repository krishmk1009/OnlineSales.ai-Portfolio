import React from "react";
import Feat2 from "../../../assets/feat2.png"

const Feature2: React.FC = () => {
  return (
    <div>
      <div className=" flex py-10 md:flex-row	flex-col-reverse	">
        {/* Your hero content goes here */}

        <div className="md:w-1/2 flex justify-center  md:justify-left my-6 md:my-0">
          <img
            src={Feat2}
            className="md:h-[470px] md:w-[620px] h-[200px]"
          />
        </div>
        <div className="md:w-1/2 md:pl-10 md:pt-10 px-4 md:px-0 text-center md:text-left">
          <h3 className="md:text-[40px] text-[22px] leading-tight md:pt-20 font-muli ">
            Langchain Based Chatbot Integration with Whatsapp :{" "}
            <span className="text-[#1F75FE]"> WhatsGPT</span>
          </h3>
          <p className="md:py-6 py-4 md:pr-10 font-roboto">
            Worked collaboratively as a member of a team of 4 to design and
            develop a versatile AI chatbot using Node.js, MongoDB, WebApi's
          </p>
          <div className="md:flex md:py-2">
          <a href="https://whatsgpt.tech/" target="blank">

            <button className="font-muli h-10 font-semibold text-white  px-4 bg-[#1F75FE] rounded-xl ">
              Learn More
            </button>

            </a>
          </div>
        </div>
      </div>

      <div className="md:flex pb-10  hidden">
        <div className="w-1/4 mx-7 ">
          <h3 className="text-[25px] text-[#1F75FE] my-3 leading-tight font-muli">
          Sinhgas Institute of Technology
          </h3>
          <p className="text-[16px] font-roboto">
          Earned a Bachelor of Engineering degree with a specialization in Computer Engineering maintaining a strong academic record of 8.49.


          </p>
        </div>
        <div className="w-1/4 mx-7 ">
          <h3 className="text-[25px] text-[#1F75FE] my-3 leading-tight font-muli">
          Resedential Junior College

          </h3>
          <p className="text-[16px] font-roboto">
          Completed higher secondary school from Ahmednagar,Maharashtra with a focus on technical subjects, achieving a notable score of 7.3


          </p>
        </div>
        <div className="w-1/4 mx-7 ">
          <h3 className="text-[25px] text-[#1F75FE] my-3 leading-tight font-muli">
          SSEVJ School, Ahmednagar

          </h3>
          <p className="text-[16px] font-roboto">
          Attained an outstanding score of 9.8 in the Secondary School Certificate examination, showcasing a solid foundation in academics.
          </p>
        </div>
        <div className="w-1/4 mx-7 ">
          <h3 className="text-[25px] text-[#1F75FE] my-3 leading-tight font-muli">
          Extra Curricular Activities
          </h3>
          <p className="text-[16px] font-roboto">
          Recognized as an Ideathon finalist by AG Patil Institue and featured in Punekar News, with an interview on RadioMirchi FM for pioneering WhatsGPT


          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
