import React from "react";

import dataImg from "../../assets/Data.svg";
import auditImg from "../../assets/audit.svg";
// import SBG1 from "../../assets/SBG1.svg";
// import screen1 from "../../assets/screen1.svg";

const ServicesOne = () => {
  return (
    <div>
      <section
        className="text-gray-600 body-font relative"
        // style={{
        //   backgroundImage: `url(${SBG1})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   width: "100%",
        //   height: "40rem", // Adjust as needed
        //   marginTop: "10rem",
        // }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-2xl lg:w-full md:w-3/4 w-full  mb-10 md:mb-0 relative">
            {/* Image positioned on top of background image */}
            <img
              src={auditImg}
              alt="A descriptive alternative text"
              className="w-full  left-0 top-0"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center relative z-10">
            <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Audit and Compliance
            </h6>
            <p className="mb-8 leading-relaxed sm:text-xl text-xl text-white">
              Our experienced data protection specialists conduct comprehensive
              audits, identifying compliance gaps, assessing risks and providing
              actionable recommendations to bridge the gap and achieve robust
              compliance with regulations like NDPR
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col    text-center items-center space-y-2.5">
        <h6 className="title-font  sm:text-left  sm:text-4xl text-3xl my-10 font-medium text-white">
          What you gain
        </h6>
        <div className="flex items-start">
          <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g path="url(#clip0_155_1489)">
                <path
                  d="M5.5 0.6875L6.57708 1.5125L7.90625 1.32917L8.41042 2.58958L9.67083 3.09375L9.4875 4.42292L10.3125 5.5L9.4875 6.57708L9.67083 7.90625L8.41042 8.41042L7.90625 9.67083L6.57708 9.4875L5.5 10.3125L4.42292 9.4875L3.09375 9.67083L2.58958 8.41042L1.32917 7.90625L1.5125 6.57708L0.6875 5.5L1.5125 4.42292L1.32917 3.09375L2.58958 2.58958L3.09375 1.32917L4.42292 1.5125L5.5 0.6875Z"
                  fill="#8BC34A"
                />
                <path
                  d="M7.92912 3.34583L4.81245 6.4625L3.52912 5.17917L2.88745 5.82083L4.81245 7.74583L8.57078 3.9875L7.92912 3.34583Z"
                  fill="#CCFF90"
                />
              </g>
              <defs>
                <clipPath id="clip0_155_1489">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="text-white">
            <p>Policy Development and Documentation</p>
          </div>
        </div>

        <div className="flex items-start">
          <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g path="url(#clip0_155_1489)">
                <path
                  d="M5.5 0.6875L6.57708 1.5125L7.90625 1.32917L8.41042 2.58958L9.67083 3.09375L9.4875 4.42292L10.3125 5.5L9.4875 6.57708L9.67083 7.90625L8.41042 8.41042L7.90625 9.67083L6.57708 9.4875L5.5 10.3125L4.42292 9.4875L3.09375 9.67083L2.58958 8.41042L1.32917 7.90625L1.5125 6.57708L0.6875 5.5L1.5125 4.42292L1.32917 3.09375L2.58958 2.58958L3.09375 1.32917L4.42292 1.5125L5.5 0.6875Z"
                  fill="#8BC34A"
                />
                <path
                  d="M7.92912 3.34583L4.81245 6.4625L3.52912 5.17917L2.88745 5.82083L4.81245 7.74583L8.57078 3.9875L7.92912 3.34583Z"
                  fill="#CCFF90"
                />
              </g>
              <defs>
                <clipPath id="clip0_155_1489">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="text-white">
            <p>Data Inventory and Mapping</p>
          </div>
        </div>
        <div className="flex items-start">
          <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g path="url(#clip0_155_1489)">
                <path
                  d="M5.5 0.6875L6.57708 1.5125L7.90625 1.32917L8.41042 2.58958L9.67083 3.09375L9.4875 4.42292L10.3125 5.5L9.4875 6.57708L9.67083 7.90625L8.41042 8.41042L7.90625 9.67083L6.57708 9.4875L5.5 10.3125L4.42292 9.4875L3.09375 9.67083L2.58958 8.41042L1.32917 7.90625L1.5125 6.57708L0.6875 5.5L1.5125 4.42292L1.32917 3.09375L2.58958 2.58958L3.09375 1.32917L4.42292 1.5125L5.5 0.6875Z"
                  fill="#8BC34A"
                />
                <path
                  d="M7.92912 3.34583L4.81245 6.4625L3.52912 5.17917L2.88745 5.82083L4.81245 7.74583L8.57078 3.9875L7.92912 3.34583Z"
                  fill="#CCFF90"
                />
              </g>
              <defs>
                <clipPath id="clip0_155_1489">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="text-white">
            <p>Data Subject Rights Management </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g path="url(#clip0_155_1489)">
                <path
                  d="M5.5 0.6875L6.57708 1.5125L7.90625 1.32917L8.41042 2.58958L9.67083 3.09375L9.4875 4.42292L10.3125 5.5L9.4875 6.57708L9.67083 7.90625L8.41042 8.41042L7.90625 9.67083L6.57708 9.4875L5.5 10.3125L4.42292 9.4875L3.09375 9.67083L2.58958 8.41042L1.32917 7.90625L1.5125 6.57708L0.6875 5.5L1.5125 4.42292L1.32917 3.09375L2.58958 2.58958L3.09375 1.32917L4.42292 1.5125L5.5 0.6875Z"
                  fill="#8BC34A"
                />
                <path
                  d="M7.92912 3.34583L4.81245 6.4625L3.52912 5.17917L2.88745 5.82083L4.81245 7.74583L8.57078 3.9875L7.92912 3.34583Z"
                  fill="#CCFF90"
                />
              </g>
              <defs>
                <clipPath id="clip0_155_1489">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="text-white">
            <p>Data Breach Prevention and Response </p>
          </div>
        </div>
        <div className="flex items-start">
          <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g path="url(#clip0_155_1489)">
                <path
                  d="M5.5 0.6875L6.57708 1.5125L7.90625 1.32917L8.41042 2.58958L9.67083 3.09375L9.4875 4.42292L10.3125 5.5L9.4875 6.57708L9.67083 7.90625L8.41042 8.41042L7.90625 9.67083L6.57708 9.4875L5.5 10.3125L4.42292 9.4875L3.09375 9.67083L2.58958 8.41042L1.32917 7.90625L1.5125 6.57708L0.6875 5.5L1.5125 4.42292L1.32917 3.09375L2.58958 2.58958L3.09375 1.32917L4.42292 1.5125L5.5 0.6875Z"
                  fill="#8BC34A"
                />
                <path
                  d="M7.92912 3.34583L4.81245 6.4625L3.52912 5.17917L2.88745 5.82083L4.81245 7.74583L8.57078 3.9875L7.92912 3.34583Z"
                  fill="#CCFF90"
                />
              </g>
              <defs>
                <clipPath id="clip0_155_1489">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="text-white">
            <p>Compliance Audits and Reporting</p>
          </div>
        </div>
      </div>

      <section
        className="text-gray-600 body-font"
        // style={{
        //   backgroundImage: `url(${screen1})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center"
        // }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-2xl lg:w-full md:w-3/4 w-full mb-10 md:mb-0">
            <img
              src={dataImg}
              alt="A descriptive alternative text"
              className="w-full h-auto"
            />
          </div>

          <div
            id="data-protection"
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Data Protection Training
            </h6>
            <p className="mb-8 leading-relaxed sm:text-xl text-xl text-white ">
              We deliver insightful and engaging training programs for employees
              at all levels, equipping them with the knowledge and skills to
              handle personal data responsibility and mitigate data security
              risks.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col ml-4  text-center items-center -mb-1 space-y-2.5">
        <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          What you gain
        </h6>
        <div className="flex items-start">
          <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g path="url(#clip0_155_1489)">
                <path
                  d="M5.5 0.6875L6.57708 1.5125L7.90625 1.32917L8.41042 2.58958L9.67083 3.09375L9.4875 4.42292L10.3125 5.5L9.4875 6.57708L9.67083 7.90625L8.41042 8.41042L7.90625 9.67083L6.57708 9.4875L5.5 10.3125L4.42292 9.4875L3.09375 9.67083L2.58958 8.41042L1.32917 7.90625L1.5125 6.57708L0.6875 5.5L1.5125 4.42292L1.32917 3.09375L2.58958 2.58958L3.09375 1.32917L4.42292 1.5125L5.5 0.6875Z"
                  fill="#8BC34A"
                />
                <path
                  d="M7.92912 3.34583L4.81245 6.4625L3.52912 5.17917L2.88745 5.82083L4.81245 7.74583L8.57078 3.9875L7.92912 3.34583Z"
                  fill="#CCFF90"
                />
              </g>
              <defs>
                <clipPath id="clip0_155_1489">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="text-white">
            <p>Deep Understanding</p>
          </div>
        </div>

        <div className="flex items-start">
          <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g path="url(#clip0_155_1489)">
                <path
                  d="M5.5 0.6875L6.57708 1.5125L7.90625 1.32917L8.41042 2.58958L9.67083 3.09375L9.4875 4.42292L10.3125 5.5L9.4875 6.57708L9.67083 7.90625L8.41042 8.41042L7.90625 9.67083L6.57708 9.4875L5.5 10.3125L4.42292 9.4875L3.09375 9.67083L2.58958 8.41042L1.32917 7.90625L1.5125 6.57708L0.6875 5.5L1.5125 4.42292L1.32917 3.09375L2.58958 2.58958L3.09375 1.32917L4.42292 1.5125L5.5 0.6875Z"
                  fill="#8BC34A"
                />
                <path
                  d="M7.92912 3.34583L4.81245 6.4625L3.52912 5.17917L2.88745 5.82083L4.81245 7.74583L8.57078 3.9875L7.92912 3.34583Z"
                  fill="#CCFF90"
                />
              </g>
              <defs>
                <clipPath id="clip0_155_1489">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="text-white">
            <p>Compliance Culture</p>
          </div>
        </div>

        <div className="flex items-start">
          <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g path="url(#clip0_155_1489)">
                <path
                  d="M5.5 0.6875L6.57708 1.5125L7.90625 1.32917L8.41042 2.58958L9.67083 3.09375L9.4875 4.42292L10.3125 5.5L9.4875 6.57708L9.67083 7.90625L8.41042 8.41042L7.90625 9.67083L6.57708 9.4875L5.5 10.3125L4.42292 9.4875L3.09375 9.67083L2.58958 8.41042L1.32917 7.90625L1.5125 6.57708L0.6875 5.5L1.5125 4.42292L1.32917 3.09375L2.58958 2.58958L3.09375 1.32917L4.42292 1.5125L5.5 0.6875Z"
                  fill="#8BC34A"
                />
                <path
                  d="M7.92912 3.34583L4.81245 6.4625L3.52912 5.17917L2.88745 5.82083L4.81245 7.74583L8.57078 3.9875L7.92912 3.34583Z"
                  fill="#CCFF90"
                />
              </g>
              <defs>
                <clipPath id="clip0_155_1489">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="text-white">
            <p>Develop Practical Skills</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOne;
