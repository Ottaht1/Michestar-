import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { ILogo } from "../utils/icons.utils";
import { NavLink, Link, useLocation } from "react-router-dom";
import config from "../utils/config";

const { routes } = config;

const navigation = [
  { name: "Home", href: routes.home },
  { name: "About Us", href: routes.about },
  {
    name: "Services",
    href: routes.services,
    children: [
      { name: "Service 1", href: routes.service1 },
      { name: "Service 2", href: routes.service2 },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

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
                          <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
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
                          <Menu.Items className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {item.children.map((child) => (
                              <Menu.Item key={child.name}>
                                {({ active }) => (
                                  <NavLink
                                    to={child.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
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
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={`text-white hover:text-[#FFA500] px-8 py-3 text-base font-medium ${
                          location.pathname === item.href ? " text-[#FFA500] " : "text-white"
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
                                  active ? "bg-gray-900 text-white" : "text-white",
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