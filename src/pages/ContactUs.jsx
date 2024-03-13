import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex mt-20 gap-6 items-center justify-center">
        <div className="flex bg-[#30395F] rounded-lg p-4 flex-col w-60 h-[10rem] ">
          <div className="items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Location
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
              suite 39, <br /> 3rd floor, Mangal Plaza, <br /> Area 11, Garki,
              Abuja.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-indigo-500 rounded-lg p-4 flex-colw-60 h-[10rem] ">
          <div className="items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Email Us
            </h2>
          </div>
          <div className="">
            <p className="leading-relaxed text-base">info@michestar.ng</p>
          </div>
        </div>
        <div className="flex bg-indigo-500 rounded-lg p-4 flex-col w-60 h-[10rem]">
          <div className="items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Customer Support
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">08163260399 08033445507</p>
          </div>
        </div>
      </div>

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]"></div>
          <div className="container w-[70%] px-6 md:px-12 mx-auto">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="mx-auto max-w-[700px] ">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Name"
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="email"
                        className="form-input"
                        placeholder="Email address"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Organization"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 mb-6">
                    <textarea
                      className="form-textarea"
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <div className="flex justify-center w-full px-3">
                    <button type="button" className="submit-button">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactUsPage;
