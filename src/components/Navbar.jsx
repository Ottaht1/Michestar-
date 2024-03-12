import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ILogo } from "../utils/icons.utils";
import { NavLink, Link, useLocation } from "react-router-dom";
import config from "../utils/config";


const { routes } = config;

const navigation = [
  { name: "Home", href: routes.home },
  { name: "About Us", href: routes.about },
  { name: "Services", href: routes.services },
  {name: "Contact Us", href: routes.contact},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" w-11/12 m-auto my-6 rounded-full">
      {({ open }) => (
        <>
          <div className="mx-auto min-w-7xl px-2 sm:px-6 lg:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-11 w-auto" src={ILogo} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={`text-white   hover:text-[#FFA500]  r px-8 py-3 text-base font-medium ${
                          location.pathname === item.href
                            ? " text-[#FFA500]  "
                            : "text-white"
                        }`}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                {/* <div className="flex h-11">
                  <button
                    type="button"
                    className="bg-[#FFA500]  text-white text-base hover:border-[#83979F] border-2 px-5 rounded-full"
                  >
                    Contact Us
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    location.pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-white hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
