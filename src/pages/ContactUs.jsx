import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ContactUsPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex mt-20 gap-6 items-center justify-center">
        <div className="flex bg-gradient-to-b from-[#30395f] to-[#262831] rounded-lg p-4 flex-col w-60 h-[10rem] ">
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
        <div className="flex flex-col bg-gradient-to-b from-[#30395f] to-[#262831] rounded-lg p-4 flex-colw-60 h-[10rem] ">
          <div className="items-center mb-3">
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Email Us
            </h2>
          </div>
          <div className="">
            <p className="leading-relaxed text-base">info@michestar.ng</p>
          </div>
        </div>
        <div className="flex bg-gradient-to-tr from-[#467894] via-[#B2EFCF]/50  to-[#5EFF77] rounded-lg p-4 flex-col w-60 h-[10rem]">
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
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('./assets/contactBG.svg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] to-[#43CE6A]/50"></div>
        </div>
          <div className="container w-[70%] px-6 md:px-12 mx-auto">
  <div className="block rounded-lg bg-gradient-to-br from-white/20 via-white/10 to-white/5 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:from-black/20 dark:via-black/10 dark:to-black/5 dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-md">
    <div className="mx-auto max-w-[700px]">
      <div className="text-start">
        <h1 className="mb-10 text-[#BA68C8]">Get In Touch</h1>
        <p>Write Us A Few Words About Your Project Or Ask Us Any Questions And We Will Respond To You In One Business Day.</p>
      </div>
      <form className="mt-20 text-start ">
  <div className="flex flex-wrap -mx-3 mb-6 ">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block mb-2">
        <h3 className="text-gray-700 dark:text-gray-300 ">Name</h3>
        <input
          type="text"
          className="form-input bg-gradient-to-b from-[#7C76CB] to-[#3E3B65]/50  backdrop-blur-lg w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 hover:ring-1 hover:ring-purple-600 transition-all duration-300"
          placeholder="Name"
        />
      </label>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block mb-2">
        <h3 className="text-gray-700 dark:text-gray-300">Email</h3>
        <input
          type="email"
          className="form-input bg-gradient-to-b from-[#7C76CB] to-[#3E3B65]/50  backdrop-blur-md w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 hover:ring-1 hover:ring-purple-600 transition-all duration-300"
          placeholder="Email address"
        />
      </label>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block mb-2">
        <h3 className="text-gray-700 dark:text-gray-300">Phone Number</h3>
        <input
          type="tel"
          className="form-input bg-gradient-to-b from-[#7C76CB] to-[#3E3B65]/50  backdrop-blur-md w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 hover:ring-1 hover:ring-purple-600 transition-all duration-300"
          placeholder="Phone Number"
        />
      </label>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block mb-2">
        <h3 className="text-gray-700 dark:text-gray-300">Organization</h3>
        <input
          type="text"
          className="form-input bg-gradient-to-b from-[#7C76CB] to-[#3E3B65]/50  backdrop-blur-md w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 hover:ring-1 hover:ring-purple-600 transition-all duration-300"
          placeholder="Organization"
        />
      </label>
    </div>
  </div>
  <div className="w-full  px-3 mb-6">
    <label className="block mb-2">
      <h3 className="text-gray-700 dark:text-gray-300">Message</h3>
      <textarea
        className="form-textarea bg-gradient-to-b from-[#7C76CB] to-[#3E3B65]/50  backdrop-blur-md w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 hover:ring-1 hover:ring-purple-600 transition-all duration-300"
        rows="4"
        placeholder="Your message"
      ></textarea>
    </label>
  </div>
  <div className="flex">
    <button
      type="button"
      className="submit-button bg-gradient-to-b from-[#5EFF77] to-[#5EB1FF]/50 w-32 rounded-md py-3 px-6 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
    >
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
