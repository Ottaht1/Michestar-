import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import landingpagewoman from "../assets/landingpagewoman.svg";
import landingpageman from "../assets/landingpageman.svg";
import image1 from "../assets/Paymi.svg";
import image2 from "../assets/fairsure.svg";
import image3 from "../assets/freewave.svg";
import asterick from "../assets/asterick.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image from "../assets/background.svg";
import Eclipse from "../assets/Eclipse.svg";
import pngtree from "../assets/pngtreegradient.svg";
import persona1 from "../assets/images/tunde.svg";
import persona2 from "../assets/images/femi.svg";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              We Audit, Protect, <br /> Analyze And <br /> Automate Your <br />{" "}
              Data.
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              We have a deep understanding of <br /> data privacy, security,
              automation <br /> and analysis.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white border-2 border-gray-400 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Contact Us
              </button>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-3/4 w-full">
            <img
              src={landingpagewoman}
              alt="Description of the image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-2xl lg:w-full md:w-3/4 w-full mb-10 md:mb-0">
            <img
              src={landingpageman}
              alt="A descriptive alternative text"
              className="w-full h-auto"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h6 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#AECBFA]">
              What We Do
            </h6>
            <p className="mb-8 leading-relaxed sm:text-4xl text-2xl text-white ">
              The Perfect Solution For all Protection
            </p>
            <div className="flex flex-col ml-4  sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g path="url(#clip0_130_627)">
                      <path
                        d="M7.24327 14.6481C8.04424 15.4354 8.77862 15.4199 9.55965 14.619L10.5143 13.6464C10.6135 13.551 10.7009 13.5122 10.8328 13.5105L12.1887 13.4935C13.3123 13.4794 13.8269 12.9581 13.8127 11.8281L13.7957 10.4722C13.794 10.3404 13.8305 10.252 13.9234 10.1504L14.8654 9.17169C15.659 8.37064 15.6434 7.63626 14.8363 6.85534L13.87 5.90061C13.7747 5.80762 13.7358 5.71395 13.7342 5.58841L13.7171 4.2262C13.7031 3.10882 13.1817 2.588 12.0517 2.60221L10.6958 2.61926C10.564 2.62092 10.4757 2.59063 10.3741 2.49772L9.39531 1.54945C8.59431 0.762152 7.85993 0.777682 7.07893 1.57857L6.12428 2.55116C6.03132 2.64652 5.93754 2.67909 5.81198 2.68067L4.44979 2.6978C3.32614 2.71193 2.81159 3.23324 2.8258 4.36316L2.84293 5.72537C2.84451 5.8509 2.8143 5.94544 2.72134 6.0408L1.77304 7.0196C0.98577 7.82057 1.00127 8.55495 1.80217 9.33595L2.77478 10.2906C2.87019 10.3899 2.90268 10.4773 2.90434 10.6092L2.92139 11.9651C2.93552 13.0887 3.46309 13.6032 4.58675 13.5891L5.94893 13.572C6.07449 13.5704 6.16914 13.6069 6.26447 13.6998L7.24327 14.6481ZM7.30124 11.2696C7.10666 11.2721 6.98031 11.2109 6.88482 11.1053L4.75886 8.80277C4.66972 8.70346 4.61793 8.57854 4.61627 8.44671C4.61256 8.15166 4.8358 7.92911 5.15594 7.92508C5.32543 7.92295 5.45167 7.97789 5.56617 8.09573L7.2528 9.9141L10.4285 5.32233C10.5517 5.1387 10.6763 5.06178 10.896 5.05901C11.2036 5.05515 11.4262 5.27838 11.4299 5.57343C11.4312 5.68014 11.3888 5.80625 11.3211 5.90753L7.72565 11.0696C7.633 11.1901 7.48959 11.2673 7.30124 11.2696Z"
                        fill="#39378B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_627">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="translate(0.72876 0.693634) rotate(-0.720436)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="text-white">
                  <strong>Expertise:</strong>
                  <p>
                    We have a deep understanding
                    <br />
                    of data privacy, security,
                    <br />
                    automation, and analysis.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g path="url(#clip0_130_627)">
                      <path
                        d="M7.24327 14.6481C8.04424 15.4354 8.77862 15.4199 9.55965 14.619L10.5143 13.6464C10.6135 13.551 10.7009 13.5122 10.8328 13.5105L12.1887 13.4935C13.3123 13.4794 13.8269 12.9581 13.8127 11.8281L13.7957 10.4722C13.794 10.3404 13.8305 10.252 13.9234 10.1504L14.8654 9.17169C15.659 8.37064 15.6434 7.63626 14.8363 6.85534L13.87 5.90061C13.7747 5.80762 13.7358 5.71395 13.7342 5.58841L13.7171 4.2262C13.7031 3.10882 13.1817 2.588 12.0517 2.60221L10.6958 2.61926C10.564 2.62092 10.4757 2.59063 10.3741 2.49772L9.39531 1.54945C8.59431 0.762152 7.85993 0.777682 7.07893 1.57857L6.12428 2.55116C6.03132 2.64652 5.93754 2.67909 5.81198 2.68067L4.44979 2.6978C3.32614 2.71193 2.81159 3.23324 2.8258 4.36316L2.84293 5.72537C2.84451 5.8509 2.8143 5.94544 2.72134 6.0408L1.77304 7.0196C0.98577 7.82057 1.00127 8.55495 1.80217 9.33595L2.77478 10.2906C2.87019 10.3899 2.90268 10.4773 2.90434 10.6092L2.92139 11.9651C2.93552 13.0887 3.46309 13.6032 4.58675 13.5891L5.94893 13.572C6.07449 13.5704 6.16914 13.6069 6.26447 13.6998L7.24327 14.6481ZM7.30124 11.2696C7.10666 11.2721 6.98031 11.2109 6.88482 11.1053L4.75886 8.80277C4.66972 8.70346 4.61793 8.57854 4.61627 8.44671C4.61256 8.15166 4.8358 7.92911 5.15594 7.92508C5.32543 7.92295 5.45167 7.97789 5.56617 8.09573L7.2528 9.9141L10.4285 5.32233C10.5517 5.1387 10.6763 5.06178 10.896 5.05901C11.2036 5.05515 11.4262 5.27838 11.4299 5.57343C11.4312 5.68014 11.3888 5.80625 11.3211 5.90753L7.72565 11.0696C7.633 11.1901 7.48959 11.2673 7.30124 11.2696Z"
                        fill="#39378B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_627">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="translate(0.72876 0.693634) rotate(-0.720436)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="text-white">
                  <strong>Compliance:</strong>
                  <p>
                    We are committed to helping you
                    <br /> comply with all relevant regulations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className=" text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g path="url(#clip0_130_627)">
                      <path
                        d="M7.24327 14.6481C8.04424 15.4354 8.77862 15.4199 9.55965 14.619L10.5143 13.6464C10.6135 13.551 10.7009 13.5122 10.8328 13.5105L12.1887 13.4935C13.3123 13.4794 13.8269 12.9581 13.8127 11.8281L13.7957 10.4722C13.794 10.3404 13.8305 10.252 13.9234 10.1504L14.8654 9.17169C15.659 8.37064 15.6434 7.63626 14.8363 6.85534L13.87 5.90061C13.7747 5.80762 13.7358 5.71395 13.7342 5.58841L13.7171 4.2262C13.7031 3.10882 13.1817 2.588 12.0517 2.60221L10.6958 2.61926C10.564 2.62092 10.4757 2.59063 10.3741 2.49772L9.39531 1.54945C8.59431 0.762152 7.85993 0.777682 7.07893 1.57857L6.12428 2.55116C6.03132 2.64652 5.93754 2.67909 5.81198 2.68067L4.44979 2.6978C3.32614 2.71193 2.81159 3.23324 2.8258 4.36316L2.84293 5.72537C2.84451 5.8509 2.8143 5.94544 2.72134 6.0408L1.77304 7.0196C0.98577 7.82057 1.00127 8.55495 1.80217 9.33595L2.77478 10.2906C2.87019 10.3899 2.90268 10.4773 2.90434 10.6092L2.92139 11.9651C2.93552 13.0887 3.46309 13.6032 4.58675 13.5891L5.94893 13.572C6.07449 13.5704 6.16914 13.6069 6.26447 13.6998L7.24327 14.6481ZM7.30124 11.2696C7.10666 11.2721 6.98031 11.2109 6.88482 11.1053L4.75886 8.80277C4.66972 8.70346 4.61793 8.57854 4.61627 8.44671C4.61256 8.15166 4.8358 7.92911 5.15594 7.92508C5.32543 7.92295 5.45167 7.97789 5.56617 8.09573L7.2528 9.9141L10.4285 5.32233C10.5517 5.1387 10.6763 5.06178 10.896 5.05901C11.2036 5.05515 11.4262 5.27838 11.4299 5.57343C11.4312 5.68014 11.3888 5.80625 11.3211 5.90753L7.72565 11.0696C7.633 11.1901 7.48959 11.2673 7.30124 11.2696Z"
                        fill="#39378B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_627">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="translate(0.72876 0.693634) rotate(-0.720436)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="text-white">
                  <strong>Audits:</strong>
                  <p>
                    We conduct comprehensive audits to
                    <br />
                    identify vulnerabilities and gaps in your
                    <br />
                    data protection practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 w-full body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="w-full item">
                  <div
                    className="h-auto bg-[#383D51] p-8 rounded"
                    style={{
                      backgroundImage: `url(${Eclipse})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h1 className="text-xl font-medium title-font text-[#AECBFA] text-center mb-4">
                      What Our Clients Say About Us
                    </h1>
                    <div className="flex justify-center items-center mb-4">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                        >
                          <path
                            d="M9.99996 0.666656L12.9 7.33331L20 8L14.6666 12.3333L16.3333 19.3333L9.99996 15.6667L3.66663 19.3333L5.33329 12.3333L0 8L7.09996 7.33331L9.99996 0.666656Z"
                            fill="#ED892D"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-100 mb-4">
                      "Working with Michestar has been a transformative
                      experience for our organization. Their expertise in data
                      protection compliance in Nigeria is second to none. The
                      team at Michestar demonstrated a deep understanding of the
                      regulatory landscape, providing us with tailored solutions
                      that not only ensured compliance but also enhanced the
                      overall security of our data."
                    </p>
                    <div className="flex flex-col items-center">
                      <img
                        alt="testimonial"
                        src={persona1}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center mb-2"
                      />
                      <span className="flex-grow flex flex-col text-center">
                        <span className="title-font font-bold text-white">
                          Tunde Alabi
                        </span>
                        <span className="text-white text-sm">Babcock MFB</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full item">
                  <div
                    className="h-auto bg-[#383D51] p-8 rounded"
                    style={{
                      backgroundImage: `url(${Eclipse})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h1 className="text-xl font-medium title-font text-[#AECBFA] text-center mb-4">
                      What Our Clients Say About Us
                    </h1>
                    <div className="flex justify-center items-center mb-4">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1"
                        >
                          <path
                            d="M9.99996 0.666656L12.9 7.33331L20 8L14.6666 12.3333L16.3333 19.3333L9.99996 15.6667L3.66663 19.3333L5.33329 12.3333L0 8L7.09996 7.33331L9.99996 0.666656Z"
                            fill="#ED892D"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-100 mb-4">
                      "Absolutely fantastic service from Michestar! As a
                      business owner in Nigeria, I understand the critical
                      importance of data security. That's why I turned to
                      Michestar, and they did not disappoint. Their team went
                      above and beyond. With their expertise, I can confidently
                      say that our sensitive information is in trusted hands.
                      Highly recommend Michestar to anyone serious about data
                      protection in Nigeria."
                    </p>
                    <div className="flex flex-col items-center">
                      <img
                        alt="testimonial"
                        src={persona2}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center mb-2"
                      />
                      <span className="flex-grow flex flex-col text-center">
                        <span className="title-font font-bold text-white">
                          Femi Alabi
                        </span>
                        <span className="text-white text-sm">
                          Paymi Solutions
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="text-white body-font">
        <div className="container px-5 py-24  mx-auto">
          <div className="flex flex-col text-center w-full mb-20 ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#AECBFA]">
              Our Services
            </h1>
            <div className="sm:text-3xl text-2xl font-medium title-font text-gray-900 ">
              <img
                alt="services"
                src={asterick}
                className="w-94 sm:w-80 md:w-96 h-auto  object-cover object-center mx-[43%]"
              />
            </div>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/3 ">
              <div className="flex  bg-[#2A2354] rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.27962 4.13109L9.1035 3.54576L8.22177 3.51309L7.15439 4.12656L8.11611 5.05204L8.1172 6.13337L8.75473 6.1316L8.75364 5.05028L11.4235 6.61683L11.4257 7.28561L12.5321 7.29045L12.516 6.0093L9.27962 4.13109Z"
                        fill="#669DF6"
                      />
                      <path
                        d="M8.22185 3.51309L8.2156 3.51317L7.33092 3.74306L7.15448 4.12656L3.89026 5.999L3.88762 7.28038L5.00027 7.28514L5.00436 6.61629L7.67864 5.05129L7.67974 6.13261L8.21728 6.1321L8.22185 3.51309Z"
                        fill="#AECBFA"
                      />
                      <path
                        d="M8.22178 3.51307L8.21553 3.51315L6.06849 2.2713L4.98854 2.87868L7.15441 4.12654L8.22178 3.51307Z"
                        fill="#669DF6"
                      />
                      <path
                        d="M11.4208 10.3672L8.75272 11.9321L8.7517 10.857L7.67663 10.8581L7.67764 11.9331L8.20959 13.4766L9.09608 13.3904L9.27063 12.8569L12.5411 10.9844L12.5434 9.67802L11.4246 9.67959L11.4208 10.3672Z"
                        fill="#669DF6"
                      />
                      <path
                        d="M8.20964 13.4766L6.06255 14.7162L6.0313 14.7165L4.98611 14.1109L7.15178 12.8586L8.20964 13.4766Z"
                        fill="#669DF6"
                      />
                      <path
                        d="M9.27964 4.13112L11.4453 2.87879L10.4001 2.27314L10.3689 2.27353L8.22179 3.51312L9.27964 4.13112Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M9.27694 12.8631L11.4428 14.1109L10.3941 14.7179L10.3629 14.7183L8.20957 13.4765L9.27694 12.8631Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M8.20952 13.4703L7.15175 12.8585L3.91538 10.9803L3.89966 9.73041L4.99957 9.71658L5.00149 10.3666L7.67765 11.9331L7.67663 10.858L8.21417 10.8575L8.20952 13.4703Z"
                        fill="#AECBFA"
                      />
                      <path
                        d="M12.0497 9.18418C12.4432 9.17923 12.7581 8.85625 12.7532 8.46278C12.7482 8.0693 12.4253 7.75434 12.0318 7.75929C11.6383 7.76424 11.3233 8.08722 11.3283 8.48069C11.3332 8.87417 11.6562 9.18913 12.0497 9.18418Z"
                        fill="#AECBFA"
                      />
                      <path
                        d="M4.39906 9.18039C4.79253 9.17545 5.1075 8.85246 5.10255 8.45899C5.0976 8.06552 4.77462 7.75056 4.38115 7.75551C3.98767 7.76045 3.67271 8.08344 3.67766 8.47691C3.68261 8.87038 4.00559 9.18534 4.39906 9.18039Z"
                        fill="#AECBFA"
                      />
                      <path
                        d="M8.24635 7.95066C8.63982 7.94571 8.95478 7.62273 8.94984 7.22925C8.94489 6.83578 8.62191 6.52082 8.22844 6.52577C7.83496 6.53072 7.52 6.8537 7.52495 7.24717C7.5299 7.64064 7.85288 7.95561 8.24635 7.95066Z"
                        fill="#AECBFA"
                      />
                      <path
                        d="M8.22157 10.4574C8.61504 10.4524 8.93 10.1294 8.92506 9.73597C8.92011 9.3425 8.59713 9.02754 8.20365 9.03248C7.81018 9.03743 7.49522 9.36041 7.50017 9.75389C7.50512 10.1474 7.8281 10.4623 8.22157 10.4574Z"
                        fill="#AECBFA"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    NDPR-licensed DPO: We have a licensed Data Protection
                    Officer on board to ensure compliance with GDPR and other
                    relevant regulations.
                  </p>
                  <a className="mt-3 text-white border rounded-xl w-40 h-10 inline-flex  items-center">
                    Read More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-[#2A2354] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.69351 8.50531C8.63213 8.56883 8.55877 8.61955 8.47768 8.65456C8.39658 8.68957 8.30936 8.70816 8.22104 8.70927C8.13272 8.71038 8.04505 8.69399 7.9631 8.66103C7.88115 8.62807 7.80654 8.57921 7.74358 8.51726L6.8007 7.59779L7.26969 7.11685L8.20609 8.01765L10.7979 5.35985L11.3103 5.8472L8.69351 8.50531Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.7031 7.77375C10.5737 7.78899 10.4534 7.84822 10.3625 7.94152C10.2715 8.03483 10.2153 8.15655 10.2033 8.28633C10.148 8.73356 9.94374 9.14915 9.62343 9.46614C9.30312 9.78312 8.88542 9.98303 8.43763 10.0337C8.04105 10.0783 7.64012 10.005 7.28489 9.82314C6.90167 9.62754 6.59201 9.31322 6.40215 8.92712C6.21229 8.54103 6.15242 8.10387 6.23149 7.68094C6.31056 7.25802 6.52432 6.87202 6.84085 6.58059C7.15737 6.28916 7.55968 6.10795 7.98768 6.06401C8.24235 6.03715 8.49981 6.06154 8.7449 6.13574C8.85487 6.17334 8.97379 6.17594 9.0853 6.1432C9.19682 6.11046 9.29545 6.04398 9.36765 5.9529C9.42671 5.88149 9.46743 5.79673 9.48626 5.70599C9.5051 5.61526 9.50147 5.5213 9.47571 5.43228C9.44994 5.34326 9.40282 5.26189 9.33843 5.19524C9.27404 5.12859 9.19434 5.07869 9.10627 5.04986C8.60896 4.89711 8.08139 4.87093 7.5714 4.9737C7.06142 5.07646 6.58516 5.30492 6.18582 5.63836C5.78648 5.97179 5.47671 6.39964 5.28459 6.88311C5.09247 7.36657 5.0241 7.89035 5.08566 8.40693C5.12915 8.81696 5.25335 9.21433 5.45111 9.57614C5.64887 9.93796 5.91628 10.2571 6.23792 10.515C6.55956 10.773 6.92908 10.9648 7.32518 11.0794C7.72129 11.1939 8.13614 11.2289 8.54583 11.1824C9.25729 11.1101 9.92245 10.7961 10.4303 10.2926C10.9381 9.78908 11.2579 9.12665 11.3363 8.41584C11.3441 8.33149 11.3329 8.24647 11.3036 8.16698C11.2743 8.08749 11.2276 8.01555 11.167 7.95641C11.1064 7.89727 11.0333 7.85242 10.9531 7.82515C10.8729 7.79787 10.7876 7.78885 10.7035 7.79875L10.7031 7.77375Z"
                        fill="#669DF6"
                      />
                      <path
                        d="M8.25381 11.8111C8.50101 11.808 8.74359 11.8783 8.95086 12.013C9.15814 12.1478 9.32079 12.341 9.41827 12.5682C9.51574 12.7954 9.54365 13.0464 9.49848 13.2895C9.4533 13.5325 9.33706 13.7567 9.16445 13.9337C8.99185 14.1107 8.77063 14.2326 8.52878 14.2838C8.28693 14.3351 8.03531 14.3135 7.80573 14.2218C7.57615 14.1301 7.37893 13.9723 7.239 13.7685C7.09908 13.5647 7.02273 13.324 7.01962 13.0767C7.01545 12.7453 7.14314 12.4257 7.3746 12.1883C7.60605 11.951 7.92231 11.8153 8.25381 11.8111Z"
                        fill="#AECBFA"
                      />
                      <path
                        d="M8.12808 1.81192C8.37528 1.80881 8.61786 1.87908 8.82513 2.01383C9.0324 2.14859 9.19506 2.34178 9.29254 2.56898C9.39001 2.79618 9.41792 3.04719 9.37274 3.29025C9.32756 3.53331 9.21132 3.75752 9.03872 3.93452C8.86612 4.11152 8.6449 4.23336 8.40305 4.28464C8.1612 4.33592 7.90958 4.31432 7.68 4.22259C7.45042 4.13086 7.25319 3.97312 7.11327 3.7693C6.97334 3.56548 6.897 3.32474 6.89389 3.07754C6.88972 2.74604 7.01741 2.42647 7.24887 2.18912C7.48032 1.95177 7.79658 1.81609 8.12808 1.81192Z"
                        fill="#AECBFA"
                      />
                      <path
                        d="M12.0191 13.0139C11.8963 13.0149 11.7759 12.9797 11.6729 12.9127C11.5699 12.8456 11.489 12.7498 11.4402 12.637C11.3915 12.5242 11.377 12.3996 11.3987 12.2786C11.4203 12.1577 11.4772 12.0458 11.5621 11.957L13.2344 10.2421L13.178 5.75497L11.4756 4.0825C11.3577 3.96687 11.2904 3.80929 11.2883 3.64419C11.2862 3.47909 11.3495 3.31987 11.4645 3.20132C11.5218 3.14201 11.5904 3.09465 11.6661 3.06196C11.7419 3.02928 11.8234 3.01191 11.9059 3.01088C11.9884 3.00984 12.0703 3.02515 12.1468 3.05592C12.2234 3.08669 12.2931 3.13231 12.3519 3.19016L14.2503 5.04143C14.3643 5.15997 14.4269 5.31863 14.4246 5.48303L14.4875 10.4826C14.4889 10.6466 14.4258 10.8045 14.3118 10.9224L12.4605 12.8208C12.4034 12.8806 12.3349 12.9284 12.2592 12.9616C12.1834 12.9947 12.1018 13.0125 12.0191 13.0139Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M4.51976 13.1082C4.43707 13.1089 4.35506 13.0932 4.27849 13.0619C4.20192 13.0307 4.13231 12.9846 4.07369 12.9263L2.17526 11.075C2.05834 10.96 1.99128 10.8038 1.98852 10.6398L1.92566 5.64021C1.92415 5.55796 1.93888 5.47623 1.96903 5.3997C1.99917 5.32317 2.04412 5.25334 2.10131 5.19421L3.95259 3.29578C4.00995 3.23648 4.07848 3.18912 4.15424 3.15643C4.23 3.12375 4.31148 3.10638 4.39398 3.10535C4.47648 3.10431 4.55837 3.11962 4.63492 3.15039C4.71148 3.18116 4.78118 3.22678 4.84002 3.28463C4.95789 3.40025 5.02521 3.55783 5.02729 3.72293C5.02936 3.88803 4.96602 4.04725 4.8511 4.16581L3.17878 5.88072L3.2352 10.3679L4.93762 12.0403C4.99692 12.0977 5.04428 12.1662 5.07697 12.242C5.10966 12.3178 5.12702 12.3992 5.12806 12.4817C5.12909 12.5642 5.11378 12.6461 5.08301 12.7227C5.05224 12.7992 5.00662 12.8689 4.94878 12.9278C4.83433 13.0409 4.68066 13.1055 4.51976 13.1082Z"
                        fill="#669DF6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Audits and Assessments: We conduct comprehensive audits to
                    identify vulnerabilities and gaps in your data protection
                    practices.
                  </p>
                  <a className="mt-3 text-white border rounded-xl inline-flex items-center">
                    Read More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="flex rounded-lg h-full bg-[#2A2354] p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.6879 4.54149C6.15286 4.53564 6.58932 4.70829 6.92031 5.02403L6.98868 5.09255L6.99238 5.08876C7.27703 4.77161 7.66786 4.56954 8.0912 4.52064L8.18223 4.51237L8.27482 4.50896L10.5396 4.48048C10.9585 4.47521 11.3072 4.79936 11.3413 5.21296L11.3443 5.26993L11.4245 8.1904L10.6748 7.98156L10.6009 5.38841C10.5999 5.35022 10.5859 5.31352 10.5611 5.28438C10.5364 5.25524 10.5025 5.23539 10.465 5.2281L10.4365 5.22584L8.35729 5.25198C7.87433 5.25805 7.40741 5.64533 7.37635 6.09763L7.37481 6.15428L7.44602 11.8171L7.4956 11.7936L7.5306 11.7736L7.56447 11.7526L7.63063 11.7053C7.6392 11.6982 7.64916 11.6931 7.65984 11.6901C7.67053 11.6872 7.68172 11.6865 7.69269 11.6881C7.70366 11.6897 7.71417 11.6936 7.72354 11.6996C7.73291 11.7055 7.74094 11.7133 7.7471 11.7225C7.75795 11.7387 7.76392 11.7576 7.76429 11.7771C7.76607 11.7992 7.7642 11.8292 7.75943 11.8675L7.74559 11.9603C7.73723 12.0114 7.72596 12.0693 7.71284 12.1295L7.68301 12.2623C7.63529 12.4635 7.59496 12.5668 7.53515 12.5829C7.24965 12.6624 6.94901 12.6706 6.65959 12.6068C6.37017 12.5431 6.10083 12.4092 5.87517 12.2171L5.82776 12.175L3.5097 12.2041C3.31827 12.2057 3.13264 12.1385 2.9867 12.0146C2.84076 11.8907 2.74424 11.7185 2.71478 11.5293L2.70767 11.4709L2.70507 11.4139L2.62921 5.38064C2.6239 4.95842 2.94576 4.60747 3.35711 4.57267L3.4137 4.57009L5.6879 4.54149ZM5.6147 5.28159L3.53511 5.30774C3.49699 5.30918 3.46052 5.32364 3.43177 5.34871C3.40301 5.37377 3.38371 5.40793 3.37708 5.44549L3.37482 5.47477L3.44765 11.2666C3.44864 11.3453 3.50913 11.4136 3.58356 11.4269L3.61209 11.4295L5.96091 11.4C6.08615 11.3984 6.20864 11.4471 6.29785 11.5322L6.33396 11.5708C6.42223 11.6717 6.52788 11.7525 6.64448 11.8095L6.69049 11.8296L6.61919 6.15928C6.61344 5.70182 6.15657 5.30816 5.67509 5.28271L5.6147 5.28159Z"
                        fill="#ED892D"
                      />
                      <path
                        d="M5.54926 8.45819L4.3681 8.47304C4.29157 8.47128 4.21872 8.43988 4.16487 8.38547C4.11103 8.33106 4.0804 8.25788 4.07944 8.18134C4.07847 8.10479 4.10725 8.03086 4.15971 7.97512C4.21217 7.91937 4.28422 7.88615 4.36068 7.88246L5.54183 7.86761C5.62015 7.86663 5.69565 7.89679 5.75172 7.95147C5.80779 8.00615 5.83985 8.08087 5.84083 8.15919C5.84182 8.2375 5.81165 8.313 5.75697 8.36908C5.70229 8.42515 5.62757 8.4572 5.54926 8.45819ZM5.53069 6.98156L4.34953 6.99641C4.27301 6.99464 4.20015 6.96325 4.1463 6.90884C4.09246 6.85443 4.06183 6.78125 4.06087 6.7047C4.05991 6.62816 4.08868 6.55423 4.14114 6.49848C4.1936 6.44273 4.26565 6.40952 4.34211 6.40583L5.52326 6.39098C5.60158 6.38999 5.67708 6.42016 5.73315 6.47484C5.78923 6.52952 5.82128 6.60424 5.82227 6.68255C5.82325 6.76087 5.79308 6.83637 5.7384 6.89244C5.68372 6.94852 5.60901 6.98057 5.53069 6.98156ZM4.37924 9.3591L5.5604 9.34424C5.63877 9.34326 5.71431 9.37345 5.77042 9.42816C5.82653 9.48288 5.85861 9.55764 5.85959 9.63601C5.86058 9.71437 5.83039 9.78992 5.77568 9.84603C5.72096 9.90214 5.6462 9.93421 5.56783 9.9352L4.38667 9.95005C4.30831 9.95104 4.23276 9.92085 4.17665 9.86613C4.12054 9.81142 4.08847 9.73665 4.08748 9.65829C4.0865 9.57992 4.11668 9.50438 4.1714 9.44827C4.22611 9.39216 4.30088 9.36008 4.37924 9.3591ZM9.66549 6.92956L8.18811 6.94814C8.11158 6.94638 8.03872 6.91498 7.98487 6.86057C7.93103 6.80616 7.9004 6.73298 7.89944 6.65643C7.89848 6.57989 7.92726 6.50596 7.97971 6.45021C8.03217 6.39447 8.10422 6.36125 8.18068 6.35756L9.65769 6.33899C9.736 6.338 9.8115 6.36817 9.86758 6.42285C9.92365 6.47753 9.95571 6.55225 9.95669 6.63056C9.95767 6.70888 9.92751 6.78438 9.87283 6.84045C9.81815 6.89653 9.74343 6.92858 9.66511 6.92957L9.66549 6.92956Z"
                        fill="#F5C280"
                      />
                      <path
                        d="M10.1469 8.11536C10.4812 8.11119 10.8087 8.20897 11.086 8.39567C11.3632 8.58237 11.577 8.84913 11.6988 9.1604C11.8206 9.47166 11.8446 9.81266 11.7677 10.1379C11.6908 10.4632 11.5166 10.7573 11.2683 10.9811L11.2831 10.9663L11.3285 10.992C11.6093 11.1537 11.8546 11.3704 12.0498 11.6291L12.1208 11.7279L12.1487 11.7711L12.9256 10.6287C12.9718 10.5609 13.0392 10.5104 13.1173 10.4852C13.1953 10.4599 13.2796 10.4614 13.3567 10.4894L13.3993 10.5077L13.4382 10.5304C13.6046 10.6438 13.6495 10.8698 13.5384 11.0396L12.4838 12.5908L12.489 12.6155C12.5026 12.6855 12.5132 12.7562 12.5201 12.8278L12.529 12.9364L12.5326 13.0425C12.5346 13.1403 12.4976 13.235 12.4298 13.3056C12.362 13.3761 12.2689 13.4169 12.1711 13.4189C12.0733 13.4209 11.9786 13.3839 11.908 13.3161C11.8375 13.2483 11.7967 13.1553 11.7947 13.0574L11.7922 12.9779C11.7693 12.5456 11.5785 12.1392 11.2605 11.8454C10.9425 11.5516 10.5223 11.3935 10.0895 11.4048C9.65669 11.4161 9.24537 11.5959 8.94313 11.9059C8.64089 12.216 8.47159 12.6317 8.47129 13.0647L8.47165 13.0936C8.47288 13.1914 8.43519 13.2858 8.36686 13.3558C8.29854 13.4259 8.20518 13.4659 8.10732 13.4672C8.00946 13.4684 7.91513 13.4307 7.84506 13.3624C7.775 13.2941 7.73494 13.2007 7.73371 13.1028C7.72812 12.6598 7.8453 12.2238 8.07226 11.8433C8.29922 11.4627 8.6271 11.1524 9.01958 10.9468L9.02666 10.9433L8.97691 10.8937C8.73256 10.6374 8.57767 10.309 8.53535 9.95751L8.52673 9.86874L8.52337 9.78028C8.51789 9.34419 8.68586 8.9238 8.99034 8.61156C9.29482 8.29933 9.71086 8.12084 10.1469 8.11536ZM10.1541 8.68718C9.86971 8.69076 9.59836 8.80718 9.39977 9.01082C9.20118 9.21447 9.09163 9.48866 9.0952 9.77309C9.09878 10.0575 9.21519 10.3289 9.41884 10.5274C9.62249 10.726 9.89668 10.8356 10.1811 10.832C10.4655 10.8284 10.7369 10.712 10.9355 10.5084C11.1341 10.3047 11.2436 10.0305 11.24 9.74611C11.2365 9.46169 11.12 9.19034 10.9164 8.99175C10.7127 8.79316 10.4386 8.68361 10.1541 8.68718ZM13.2637 9.17913C13.3417 9.1777 13.417 9.2073 13.4731 9.26142C13.5293 9.31553 13.5616 9.38974 13.563 9.4677C13.5645 9.54566 13.5349 9.62099 13.4807 9.67713C13.4266 9.73327 13.3524 9.76561 13.2745 9.76704L12.5095 9.77666C12.4333 9.77537 12.3607 9.74456 12.3067 9.69073C12.2528 9.6369 12.2219 9.56425 12.2205 9.48808C12.2191 9.41192 12.2474 9.33818 12.2993 9.28241C12.3512 9.22665 12.4227 9.1932 12.4988 9.18912L13.2637 9.17913Z"
                        fill="#BE4BDB"
                      />
                      <path
                        d="M13.2524 8.28479L11.9546 8.30111C11.8799 8.30709 11.8103 8.34134 11.76 8.39686C11.7097 8.45239 11.6824 8.52502 11.6838 8.59994C11.6851 8.67487 11.715 8.74645 11.7674 8.80009C11.8197 8.85374 11.8905 8.88541 11.9654 8.88865L13.2628 8.87234C13.3375 8.8664 13.4071 8.8322 13.4574 8.77671C13.5078 8.72121 13.5351 8.6486 13.5338 8.57368C13.5325 8.49876 13.5026 8.42716 13.4503 8.37348C13.398 8.3198 13.3272 8.28809 13.2524 8.28479Z"
                        fill="#B152D4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Compliance Training: We provide tailored training programs
                    to educate your employees on data privacy best practices.
                  </p>
                  <a className="mt-3 text-white border rounded-xl inline-flex items-center">
                    Read More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto pt-16">
        <h1 className="text-[#AECBFA]">Our Partners</h1>
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap items-center justify-center gap-6">
          <div className="w-60 flex justify-center xl:pb-10 pb-16 items-center bg-[#1C2441]">
            <img
              tabIndex="0"
              className="focus:outline-none w-auto h-24 mt-20"
              src={image1}
              alt="Paymi"
              role="img"
            />
          </div>
          <div className="w-60 flex justify-center xl:pb-10 pb-16 items-center bg-[#1C2441]">
            <img
              tabIndex="0"
              className="focus:outline-none w-auto h-24  mt-20"
              src={image2}
              alt="Fairsure"
              role="img"
            />
          </div>
          <div className="w-60 flex justify-center xl:pb-10 pb-16 items-center bg-[#1C2441]">
            <img
              tabIndex="0"
              className="focus:outline-none w-auto h-24  mt-20"
              src={image3}
              alt="Freewave"
              role="img"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
