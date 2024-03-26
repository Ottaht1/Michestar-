import React, { useEffect, useRef } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { ILogo } from "../utils/icons.utils";
import { NavLink, Link, useLocation } from "react-router-dom";
import config from "../utils/config";
// import SBG1 from "../assets/services.png";
// import SBG2 from "../assets/services.png";

const { routes } = config;

const navigation = [
  { name: "Home", href: routes.home },
  { name: "About Us", href: routes.about },
  {
    name: "Services",
    href: routes.services,
    children: [
      { name: "Audit and Compliance", href: `${routes.services}/services1` },
      {
        name: "Data Protection Training",
        href: `${routes.services}/services1#data-protection`,
      },
      {
        name: "Enrollment as a Service",
        href: `${routes.services}/services2`,
      },
      {
        name: "Value-Added Services",
        href: `${routes.services}/services2`,
        children: [
          {
            name: "Data Security",
            href: `${routes.services}/services2#data-security`,
          },
          {
            name: "Data Analysis",
            href: `${routes.services}/services2#data-analysis`,
          },
        ],
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const lastHash = useRef();
  console.log(location.hash);
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return (
    <Disclosure as="nav" className=" w-11/12 m-auto my-6 rounded-full">
      {({ open }) => (
        <>
          <div className="mx-auto min-w-7xl px-2 sm:px-6 lg:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
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
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-20 w-full" src={ILogo} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                  {navigation.map((item) =>
                    item.children ? (
                      <Menu as="div" key={item.name} className="relative">
                        <Menu.Button className="inline-flex items-center text-white hover:text-[#FFA500] px-8 py-3 text-base font-medium">
                          {item.name}
                          <ChevronDownIcon
                            className="ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                        <Transition
                          as={React.Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute z-10 mt-2 w-96 origin-top-right rounded-md bg-[#171D35] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {/* Added heading and subheading for "Services" dropdown */}
                            {item.name === "Services" && (
                              <div className="px-4 py-2">
                                <h3 className="text-[#AECBFA] font-bold text-3xl">
                                  Our Services
                                </h3>
                                <h6 className="text-white mt-2">What We Do</h6>
                              </div>
                            )}
                            <div>
                              {item.children.map((child) =>
                                child.children ? (
                                  <Menu
                                    as="div"
                                    key={child.name}
                                    className="relative"
                                  >
                                    <Menu.Button className="inline-flex items-center text-white hover:text-[#FFA500] px-8 py-3 text-base font-medium">
                                      {child.name}
                                      <ChevronDownIcon
                                        className="ml-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </Menu.Button>
                                    <Transition
                                      as={React.Fragment}
                                      enter="transition ease-out duration-100"
                                      enterFrom="transform opacity-0 scale-95"
                                      enterTo="transform opacity-100 scale-100"
                                      leave="transition ease-in duration-75"
                                      leaveFrom="transform opacity-100 scale-100"
                                      leaveTo="transform opacity-0 scale-95"
                                    >
                                      <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-[#171D35] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {child.children.map((subChild) => (
                                          <div key={subChild.name}>
                                            <Menu.Item>
                                              {({ active }) => (
                                                <NavLink
                                                  to={subChild.href}
                                                  className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-white"
                                                  )}
                                                >
                                                  {subChild.name}
                                                </NavLink>
                                              )}
                                            </Menu.Item>
                                          </div>
                                        ))}
                                      </Menu.Items>
                                    </Transition>
                                  </Menu>
                                ) : (
                                  <Menu.Item key={child.name}>
                                    {({ active }) => (
                                      <NavLink
                                        to={child.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-white"
                                        )}
                                      >
                                        {child.name}
                                      </NavLink>
                                    )}
                                  </Menu.Item>
                                )
                              )}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={`text-white hover:text-[#FFA500] px-8 py-3 text-base font-medium ${
                          location.pathname === item.href
                            ? " text-[#FFA500] "
                            : "text-white"
                        }`}
                      >
                        {item.name}
                      </NavLink>
                    )
                  )}
                  <Link
                    to={routes.contact}
                    className="rounded-full bg-[#FFA500] px-8 py-3 text-base font-medium text-white hover:bg-[#FF9800]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.children ? (
                  <Menu as="div" key={item.name} className="relative">
                    <Menu.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">
                      {item.name}
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                      as={React.Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="mt-2 space-y-1 rounded-md bg-gray-700 py-1">
                        {item.children.map((child) => (
                          <Menu.Item key={child.name}>
                            {({ active }) => (
                              <NavLink
                                to={child.href}
                                className={classNames(
                                  active
                                    ? "bg-gray-900 text-white"
                                    : "text-white",
                                  "block px-3 py-2 rounded-md text-base font-medium"
                                )}
                              >
                                {child.name}
                              </NavLink>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
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
                )
              )}
              <Link
                to={routes.contact}
                className="block rounded-full bg-[#FFA500] px-3 py-2 text-base font-medium text-white hover:bg-[#FF9800]"
              >
                Contact Us
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
