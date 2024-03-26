import React from "react";
import image1 from "../assets/image 10.png";
import image2 from "../assets/image 11.png";
import image3 from "../assets/Paymi.svg";
import image4 from "../assets/fairsure.svg";
import image5 from "../assets/freewave.svg";
import Aboutsvg from "../assets/about.svg";
import image from "../assets/background.svg";
import rectangle1 from "../assets/rectangle1.svg";
import rectangle2 from "../assets/rectangle2.svg";
import rectangle4 from "../assets/rectangle4.svg";
import rectangle5 from "../assets/rectangle5.svg";
import Eclipse from "../assets/Eclipse.svg";

const AboutPage = () => {
  return (
    <>
      <div>
        <h1>About Us</h1>
        <section
          className="text-gray-600 body-font"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-2xl lg:w-full md:w-3/4 w-full mb-10 md:mb-0">
              <img
                src={image1}
                alt="A descriptive alternative text"
                className="w-full h-auto"
              />
              <img
                src={image2}
                alt="A descriptive alternative text"
                className="w-96 h-auto mt-6"
              />
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#AECBFA]">
                About Us
              </h6>
              <p className="mb-8 leading-relaxed sm:text-xl text-xl text-white ">
                Michestar Global Resources is a fully licensed Data Protection
                Compliance Organization (DPCO) and a leading data protection
                solutions provider. We empower organisations to navigate the
                ever-shifting landscape of privacy regulations and secure their
                most valuable asset: Data
              </p>
              <div className="flex flex-col ml-4  sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#AECBFA]">
                  What we offer
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
                    <p>Meticulous Audits</p>
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
                    <p>Seamless Compliance</p>
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
                    <p>Streamlined Enrollment </p>
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
                    <p>Engaging Training </p>
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
                    <p>Value-added Services </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font relative w-full h-full">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div
              className="lg:max-w-2xl lg:w-full md:w-3/4 w-full mb-10 md:mb-0"
              // style={{
              //   backgroundImage: `url(${Eclipse})`,
              //   backgroundSize: "200rem",
              //   backgroundPosition: "left",
              // }}
            >
              <img
                src={Aboutsvg}
                alt="A descriptive alternative text"
                className="w-full h-auto"
              />
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#AECBFA]">
                Our Mission
              </h6>
              <p className="mb-8 sm:text-2xl text-2xl text-white  ">
                To empower businesses and organizations to thrive in a rapidly
                evolving world by providing them with customized,reliable and
                innovative business solutions.{" "}
              </p>
              <div className="my-8 w-full bg-white h-1"></div>
              <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#AECBFA]">
                Our Vision
              </h6>
              <p className="mb-8  sm:text-2xl text-2xl text-white ">
                To be the industry leader in providing integrated business
                solutions and services.
              </p>
            </div>
            <div className="absolute w-full ">
              <img
                className="w-full h-full"
                src={Eclipse}
                alt="Eclipse"
                role="img"
              />
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font mb-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-4xl font-medium title-font text-[#AECBFA]">
                What We Offer
              </h1>
            </div>
            <div className="flex flex-wrap -m-4 font-semibold text ">
              <div className="p-4 md:w-1/2 lg:w-1/3">
                <div
                  className="flex  rounded-lg h-full p-8 flex-col text-white bg-black opacity-50"
                  style={{
                    backgroundImage: `url(${rectangle1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h6 className="text-xl">Data Mapping and inventory</h6>
                  <ul className="list-none mt-4">
                    <li>
                      <span className="text-white mr-2">•</span>We work closely
                      with your personnel to map the flow of personal data
                      throughout your organization, identifying data sources,
                      storage locations and processing activities.
                    </li>
                    <li>
                      <span className="text-white mr-2">•</span>We utilize
                      specialized data mapping tools to create a comprehensive
                      data inventory, providing clarity and transparency into
                      your data ecosystem.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 md:w-1/2 lg:w-1/3 ">
                <div
                  className="flex  rounded-lg h-full p-8 flex-col text-white bg-black opacity-50"
                  style={{
                    backgroundImage: `url(${rectangle2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h6 className="text-xl">Gap Analysis and Risk Assessment</h6>
                  <ul className="list-none mt-4">
                    <li>
                      <span className="text-white mr-2">•</span>We evaluate your
                      existing data protection practices against the strict
                      requirements of the NDPR, employing robust gap analysis
                      methodologies.
                    </li>
                    <li>
                      <span className="text-white mr-2">•</span>We idetify
                      vulnerabilities and potential non-compliance issues,
                      assessing the associated risks and potential impact on
                      your organization.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/3">
                <div
                  className="flex  rounded-lg h-full p-8 flex-col text-white bg-black opacity-50"
                  style={{
                    backgroundImage: `url(${rectangle1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h6 className="text-xl">
                    In-Depth Technical and Procedural Review
                  </h6>
                  <ul className="list-none mt-4">
                    <li>
                      <span className="text-white mr-2">•</span>Our experienced
                      data protection specialists delve deeper into your
                      technical infrastructure and security controls,
                      scrutinizing their effectiveness in protecting personal
                      data.
                    </li>
                    <li>
                      <span className="text-white mr-2">•</span>We review your
                      data protection policies, procedures and documentation,
                      ensuring alignment with NDPR best practices and addressing
                      any inconsistencies.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/3">
                <div
                  className="flex  rounded-lg h-full p-8 flex-col text-white bg-black opacity-50"
                  style={{
                    backgroundImage: `url(${rectangle4})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h6 className="text-xl">
                    Comprehensive Reporting and Recommendations
                  </h6>
                  <ul className="list-none mt-4">
                    <li>
                      <span className="text-white mr-2">•</span>We provide a
                      detailed audit report highlighting all findings, identify
                      gaps and potential risks.
                    </li>
                    <li>
                      <span className="text-white mr-2">•</span>We craft a set
                      of actionable recommendations, prioritizing crucial
                      actions to effectively address non- compliance issues and
                      bolster your data protection posture.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/3">
                <div
                  className="flex  rounded-lg h-full p-8 flex-col text-white bg-black opacity-50"
                  style={{
                    backgroundImage: `url(${rectangle5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h6 className="text-xl">
                    Implementation, Support and Guidance
                  </h6>
                  <ul className="list-none mt-4">
                    <li>
                      <span className="text-white mr-2">•</span>We go beyond
                      mere identification of problems. We offer ongoing support
                      to help to help you implement the recommended solutions,
                      providing guidance on policy revisions, technology
                      upgrades and personnel training.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto pt-16">
          <h1 className="sm:text-3xl text-4xl font-medium title-font text-[#AECBFA]">
            Our Partners
          </h1>
          <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap items-center justify-center gap-6">
            <div className="w-60 flex justify-center xl:pb-10 pb-16 items-center bg-[#1C2441]">
              <img
                tabIndex="0"
                className="focus:outline-none w-auto h-24 mt-20"
                src={image3}
                alt="Paymi"
                role="img"
              />
            </div>
            <div className="w-60 flex justify-center xl:pb-10 pb-16 items-center bg-[#1C2441]">
              <img
                tabIndex="0"
                className="focus:outline-none w-auto h-24  mt-20"
                src={image4}
                alt="Fairsure"
                role="img"
              />
            </div>
            <div className="w-60 flex justify-center xl:pb-10 pb-16 items-center bg-[#1C2441]">
              <img
                tabIndex="0"
                className="focus:outline-none w-auto h-24  mt-20"
                src={image5}
                alt="Freewave"
                role="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
