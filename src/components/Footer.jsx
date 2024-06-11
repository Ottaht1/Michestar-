import React from "react";
import { ILogo } from "../utils/icons.utils";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services/services1" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <>
      <footer
        className="bg-[#4285F4] pb-6 mt-10"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <img className="h-20" src={ILogo} alt="Company name" />
              <p className="text-lg font-medium text-start text-white">
                The Perfect Solution For all Protection
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8 ml-28">
                <div>
                  <ul role="list" className="mt-6 space-y-4 text-start">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="leading-6 text-white text-xl font-medium hover:text-[#072cb2c3]"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <div className="text-start">
                  <span className="flex items-center">
                    <svg
                      width="96"
                      height="40"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M6.63305 1.90135C4.58699 1.92708 2.9492 3.60658 2.97493 5.65264L2.97832 5.92262C3.15384 7.95058 4.85923 9.56176 6.75564 11.6506C8.68027 9.42121 10.4116 7.7293 10.3843 5.55947C10.3586 3.51341 8.67912 1.87562 6.63305 1.90135ZM9.17947 5.57712C9.19683 6.95772 8.09169 8.091 6.7111 8.10836C5.33051 8.12572 4.19723 7.02058 4.17987 5.63999C4.16251 4.2594 5.26764 3.12612 6.64823 3.10876C8.02883 3.0914 9.16211 4.19653 9.17947 5.57712ZM8.15487 4.61348C8.15842 4.89576 7.93247 5.12744 7.65022 5.13099C7.36796 5.13454 7.13625 4.90859 7.1327 4.62633C7.12916 4.34408 7.35511 4.11237 7.63736 4.10882C7.91961 4.10527 8.15132 4.33123 8.15487 4.61348Z"
                          stroke="#F6EEEE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_132_744">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(0.619385 0.851868) rotate(-0.720436)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="ml-2 sm:ml-4">
                      Suite 39, Third Floor, Mangal Plaza,{" "}
                      <br className="hidden sm:block" />
                      Area 11, Garki, Abuja.
                    </span>
                  </span>
                  <p className="flex items-center mt-4">
                    <svg
                      width="96"
                      height="40"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M6.17188 9.73222L0.105776 4.51307L0.19141 11.3231L12.1905 11.1723L12.1048 4.36219L6.17188 9.73222ZM6.1524 8.13514L0.0856481 2.91242L0.0782471 2.32385L12.0773 2.17297L12.0847 2.76153L6.1524 8.13514Z"
                          fill="#F4F0F0"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_132_751">
                          <rect
                            width="12"
                            height="12"
                            fill="white"
                            transform="translate(0.0593262 0.823975) rotate(-0.720436)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="ml-2 sm:ml-4">info@michestar.ng</span>
                  </p>
                  <p className="flex items-center mt-4">
                    <svg
                      width="96"
                      height="40"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.55137 3.44106L5.88316 4.0184C6.18258 4.53941 6.0737 5.22921 5.61828 5.69621C5.61828 5.69621 5.06595 6.2627 6.09294 7.26422C7.11961 8.26539 7.67238 7.69929 7.67238 7.69929C8.1278 7.23228 8.81461 7.10608 9.343 7.39231L9.92849 7.70948C10.7264 8.14168 10.8339 9.25161 10.1463 9.95682C9.73306 10.3805 9.22449 10.7126 8.65806 10.7412C7.70454 10.7894 6.08138 10.5683 4.43577 8.96359C2.79018 7.35885 2.52837 5.74178 2.55254 4.78733C2.5669 4.22036 2.88606 3.70362 3.29927 3.27989C3.98694 2.57472 5.09923 2.65432 5.55137 3.44106Z"
                        fill="#E8EAF2"
                      />
                    </svg>
                    <span className="ml-2 sm:ml-4">
                      08163260399, 08033445507
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-xl sm:text-2xl font-medium text-white text-center mt-6">
        &copy; Michestar Global Resources limited. All Rights Reserved.
      </p>
    </>
  );
}
