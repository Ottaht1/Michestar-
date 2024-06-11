import React from "react";
import screen2a from "../../assets/screen2a.svg";
import screen2b from "../../assets/screen2b.svg";
import screen2c from "../../assets/screen2c.svg";
import screen2d from "../../assets/screen2d.svg";

const ServicesTwo = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <div>
        <h1 className="text-white mt-10 text-2xl md:text-3xl lg:text-4xl">
          Enrollment as a Service
        </h1>
        <img
          src={screen2a}
          alt="A descriptive alternative text"
          className="w-full h-auto mt-20 md:mt-10 lg:mt-20"
        />
        <p className="mt-4 md:mt-8 text-base md:text-lg lg:text-xl">
          Our team of data security and enrollment specialists offer consulting
          services to tailor EaaS solutions to your specific needs and provide
          ongoing support for optimal performance.
        </p>
      </div>
      <section>
        <h6 className="title-font text-2xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 font-medium text-white">
          What We Offer
        </h6>
        <div className="container mx-auto text-base md:text-lg lg:text-xl flex flex-col lg:flex-row px-5 py-24 items-center">
          <div className="lg:w-1/2 lg:pr-8 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="flex flex-col ml-4 sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              {/* List items */}
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3099 4.61552C13.3253 4.52127 13.3333 4.42702 13.3333 4.33331C13.3333 3.04469 11.9046 2.01065 10.3193 2.1856C9.85725 1.51773 8.97725 1.08331 7.99992 1.08331C7.02258 1.08331 6.14258 1.51773 5.68058 2.1856C4.09192 2.01065 2.66659 3.04469 2.66659 4.33331C2.66659 4.42702 2.67459 4.52127 2.68992 4.61552C1.86792 4.99144 1.33325 5.70644 1.33325 6.49998C1.33325 7.29352 1.86792 8.00852 2.68992 8.38444C2.67454 8.47799 2.66674 8.57226 2.66659 8.66665C2.66659 9.95527 4.09192 10.9866 5.68058 10.8144C6.14258 11.4822 7.02258 11.9166 7.99992 11.9166C8.97725 11.9166 9.85725 11.4822 10.3193 10.8144C11.9046 10.9866 13.3333 9.95527 13.3333 8.66665C13.3333 8.57294 13.3253 8.47869 13.3099 8.38444C14.1319 8.00852 14.6666 7.29352 14.6666 6.49998C14.6666 5.70644 14.1319 4.99144 13.3099 4.61552ZM7.30325 8.89198L4.85859 6.88023L5.80792 6.11973L7.31258 7.35798L10.1973 5.03206L11.1359 5.80123L7.30325 8.89198Z"
                      fill="#40DDA9"
                    />
                  </svg>
                </span>
                <div className="text-white">
                  <p>Seamless Data Capture</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3099 4.61552C13.3253 4.52127 13.3333 4.42702 13.3333 4.33331C13.3333 3.04469 11.9046 2.01065 10.3193 2.1856C9.85725 1.51773 8.97725 1.08331 7.99992 1.08331C7.02258 1.08331 6.14258 1.51773 5.68058 2.1856C4.09192 2.01065 2.66659 3.04469 2.66659 4.33331C2.66659 4.42702 2.67459 4.52127 2.68992 4.61552C1.86792 4.99144 1.33325 5.70644 1.33325 6.49998C1.33325 7.29352 1.86792 8.00852 2.68992 8.38444C2.67454 8.47799 2.66674 8.57226 2.66659 8.66665C2.66659 9.95527 4.09192 10.9866 5.68058 10.8144C6.14258 11.4822 7.02258 11.9166 7.99992 11.9166C8.97725 11.9166 9.85725 11.4822 10.3193 10.8144C11.9046 10.9866 13.3333 9.95527 13.3333 8.66665C13.3333 8.57294 13.3253 8.47869 13.3099 8.38444C14.1319 8.00852 14.6666 7.29352 14.6666 6.49998C14.6666 5.70644 14.1319 4.99144 13.3099 4.61552ZM7.30325 8.89198L4.85859 6.88023L5.80792 6.11973L7.31258 7.35798L10.1973 5.03206L11.1359 5.80123L7.30325 8.89198Z"
                      fill="#40DDA9"
                    />
                  </svg>
                </span>
                <div className="text-white">
                  <p>Automated Verification and Validation</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3099 4.61552C13.3253 4.52127 13.3333 4.42702 13.3333 4.33331C13.3333 3.04469 11.9046 2.01065 10.3193 2.1856C9.85725 1.51773 8.97725 1.08331 7.99992 1.08331C7.02258 1.08331 6.14258 1.51773 5.68058 2.1856C4.09192 2.01065 2.66659 3.04469 2.66659 4.33331C2.66659 4.42702 2.67459 4.52127 2.68992 4.61552C1.86792 4.99144 1.33325 5.70644 1.33325 6.49998C1.33325 7.29352 1.86792 8.00852 2.68992 8.38444C2.67454 8.47799 2.66674 8.57226 2.66659 8.66665C2.66659 9.95527 4.09192 10.9866 5.68058 10.8144C6.14258 11.4822 7.02258 11.9166 7.99992 11.9166C8.97725 11.9166 9.85725 11.4822 10.3193 10.8144C11.9046 10.9866 13.3333 9.95527 13.3333 8.66665C13.3333 8.57294 13.3253 8.47869 13.3099 8.38444C14.1319 8.00852 14.6666 7.29352 14.6666 6.49998C14.6666 5.70644 14.1319 4.99144 13.3099 4.61552ZM7.30325 8.89198L4.85859 6.88023L5.80792 6.11973L7.31258 7.35798L10.1973 5.03206L11.1359 5.80123L7.30325 8.89198Z"
                      fill="#40DDA9"
                    />
                  </svg>
                </span>
                <div className="text-white">
                  <p>Secure DataManagement </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3099 4.61552C13.3253 4.52127 13.3333 4.42702 13.3333 4.33331C13.3333 3.04469 11.9046 2.01065 10.3193 2.1856C9.85725 1.51773 8.97725 1.08331 7.99992 1.08331C7.02258 1.08331 6.14258 1.51773 5.68058 2.1856C4.09192 2.01065 2.66659 3.04469 2.66659 4.33331C2.66659 4.42702 2.67459 4.52127 2.68992 4.61552C1.86792 4.99144 1.33325 5.70644 1.33325 6.49998C1.33325 7.29352 1.86792 8.00852 2.68992 8.38444C2.67454 8.47799 2.66674 8.57226 2.66659 8.66665C2.66659 9.95527 4.09192 10.9866 5.68058 10.8144C6.14258 11.4822 7.02258 11.9166 7.99992 11.9166C8.97725 11.9166 9.85725 11.4822 10.3193 10.8144C11.9046 10.9866 13.3333 9.95527 13.3333 8.66665C13.3333 8.57294 13.3253 8.47869 13.3099 8.38444C14.1319 8.00852 14.6666 7.29352 14.6666 6.49998C14.6666 5.70644 14.1319 4.99144 13.3099 4.61552ZM7.30325 8.89198L4.85859 6.88023L5.80792 6.11973L7.31258 7.35798L10.1973 5.03206L11.1359 5.80123L7.30325 8.89198Z"
                      fill="#40DDA9"
                    />
                  </svg>
                </span>
                <div className="text-white">
                  <p>Intuitive Workflow Management </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3099 4.61552C13.3253 4.52127 13.3333 4.42702 13.3333 4.33331C13.3333 3.04469 11.9046 2.01065 10.3193 2.1856C9.85725 1.51773 8.97725 1.08331 7.99992 1.08331C7.02258 1.08331 6.14258 1.51773 5.68058 2.1856C4.09192 2.01065 2.66659 3.04469 2.66659 4.33331C2.66659 4.42702 2.67459 4.52127 2.68992 4.61552C1.86792 4.99144 1.33325 5.70644 1.33325 6.49998C1.33325 7.29352 1.86792 8.00852 2.68992 8.38444C2.67454 8.47799 2.66674 8.57226 2.66659 8.66665C2.66659 9.95527 4.09192 10.9866 5.68058 10.8144C6.14258 11.4822 7.02258 11.9166 7.99992 11.9166C8.97725 11.9166 9.85725 11.4822 10.3193 10.8144C11.9046 10.9866 13.3333 9.95527 13.3333 8.66665C13.3333 8.57294 13.3253 8.47869 13.3099 8.38444C14.1319 8.00852 14.6666 7.29352 14.6666 6.49998C14.6666 5.70644 14.1319 4.99144 13.3099 4.61552ZM7.30325 8.89198L4.85859 6.88023L5.80792 6.11973L7.31258 7.35798L10.1973 5.03206L11.1359 5.80123L7.30325 8.89198Z"
                      fill="#40DDA9"
                    />
                  </svg>
                </span>
                <div className="text-white">
                  <p>Expert Consulting and Support </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={screen2b}
              alt="A descriptive alternative text"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <h6 className="title-font text-2xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 font-medium text-white">
          Value Added Services
        </h6>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row px-5 py-24 items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={screen2c}
              alt="A descriptive alternative text"
              className="w-full h-auto"
            />
          </div>

          <div className="container mx-auto text-base md:text-lg lg:text-xl flex flex-col lg:flex-row px-5 py-24 items-center">
            <div className="lg:w-1/2 lg:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="flex flex-col ml-4 sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                {/* Header */}
                <div id="data-security" className="flex items-center space-x-2">
                  {/* SVG */}
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
                  {/* Header text */}
                  <p className="text-white font-semibold">Data Security</p>
                  {/* Dropdown arrow */}
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.28022 6.87836C3.98732 7.15497 3.98732 7.60349 4.28022 7.88009L7.94936 11.342C8.53526 11.8948 9.48461 11.8946 10.0702 11.3416L13.7379 7.87754C14.0309 7.60094 14.0309 7.15242 13.7379 6.8758C13.4451 6.59918 12.9702 6.59918 12.6773 6.8758L9.53809 9.84062C9.24521 10.1173 8.77031 10.1172 8.47744 9.84062L5.34088 6.87836C5.04799 6.60174 4.57311 6.60174 4.28022 6.87836Z"
                      fill="#F5F0F0"
                    />
                  </svg>
                </div>
                {/* List items */}
                <div className="flex items-start">
                  <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g path="url(#clip0_183_115)">
                        <path
                          d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                        <path
                          d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_183_115">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="matrix(-1 0 0 1 14 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="text-white">
                    <p>Vulnerability Assessment</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g path="url(#clip0_183_115)">
                        <path
                          d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                        <path
                          d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_183_115">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="matrix(-1 0 0 1 14 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="text-white">
                    <p>Intrusion Detection and Prevention Systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g path="url(#clip0_183_115)">
                        <path
                          d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                        <path
                          d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_183_115">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="matrix(-1 0 0 1 14 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="text-white">
                    <p>Intrusion Detection and Prevention Systems </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g path="url(#clip0_183_115)">
                        <path
                          d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                        <path
                          d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_183_115">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="matrix(-1 0 0 1 14 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="text-white">
                    <p>Incident Response Planning and Training </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g path="url(#clip0_183_115)">
                        <path
                          d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                        <path
                          d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                          fill="#F3F1F1"
                          stroke="#F3F1F1"
                          // stroke-width="2.66667"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_183_115">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="matrix(-1 0 0 1 14 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="text-white">
                    <p>Ongoing Security Monitoring </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto text-base md:text-lg lg:text-xl flex flex-col-reverse lg:flex-row px-5 py-24 items-center">
          <div className="lg:w-1/2 lg:pr-8 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="flex flex-col ml-4 sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              {/* Header */}
              <div id="data-analysis" className="flex items-center space-x-2">
                {/* SVG */}
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
                {/* Header text */}
                <p className="text-white font-semibold">Data Analysis</p>
                {/* Dropdown arrow */}
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.28022 6.87836C3.98732 7.15497 3.98732 7.60349 4.28022 7.88009L7.94936 11.342C8.53526 11.8948 9.48461 11.8946 10.0702 11.3416L13.7379 7.87754C14.0309 7.60094 14.0309 7.15242 13.7379 6.8758C13.4451 6.59918 12.9702 6.59918 12.6773 6.8758L9.53809 9.84062C9.24521 10.1173 8.77031 10.1172 8.47744 9.84062L5.34088 6.87836C5.04799 6.60174 4.57311 6.60174 4.28022 6.87836Z"
                    fill="#F5F0F0"
                  />
                </svg>
              </div>
              {/* List items */}
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g path="url(#clip0_183_115)">
                      <path
                        d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                        fill="#F3F1F1"
                        stroke="#F3F1F1"
                        // stroke-width="2.66667"
                      />
                      <path
                        d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                        fill="#F3F1F1"
                        stroke="#F3F1F1"
                        // stroke-width="2.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_183_115">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="matrix(-1 0 0 1 14 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="text-white">
                  <p>Data Warehousing and Business Intelligence</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g path="url(#clip0_183_115)">
                      <path
                        d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                        fill="#F3F1F1"
                        stroke="#F3F1F1"
                        // stroke-width="2.66667"
                      />
                      <path
                        d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                        fill="#F3F1F1"
                        stroke="#F3F1F1"
                        // stroke-width="2.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_183_115">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="matrix(-1 0 0 1 14 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="text-white">
                  <p>Advanced Analytics and Machine Learning</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g path="url(#clip0_183_115)">
                      <path
                        d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                        fill="#F3F1F1"
                        stroke="#F3F1F1"
                        // stroke-width="2.66667"
                      />
                      <path
                        d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                        fill="#F3F1F1"
                        stroke="#F3F1F1"
                        // stroke-width="2.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_183_115">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="matrix(-1 0 0 1 14 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="text-white">
                  <p>Data Visualization and Reporting</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g path="url(#clip0_183_115)">
                      <path
                        d="M9.2628 7.00002L6.38114 4.11894L7.61897 2.8811L11.7373 7.00002L7.61897 11.1189L6.38114 9.8811L9.2628 7.00002Z"
                        fill="#F3F1F1"
                        stroke="#F3F1F1"
                        // stroke-width="2.66667"
                      />
                      <path
                        d="M3.53572 2.8811L7.65405 7.00002L3.53572 11.1189L2.29788 9.8811L5.17955 7.00002L2.29788 4.11894L3.53572 2.8811Z"
                        fill="#F3F1F1"
                        stroke="#F3F1F1"
                        // stroke-width="2.66667"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_183_115">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="matrix(-1 0 0 1 14 0)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="text-white">
                  <p>Predictive Analytics </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={screen2d}
              alt="A descriptive alternative text"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesTwo;
