import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCar,
  faDollarSign,
  faCogs,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-32 w-48"
              src="https://logos-world.net/wp-content/uploads/2022/12/Daimler-Logo.png"
              alt="Workflow"
            />
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    isActive("/")
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  HOME
                </NavLink>
                <NavLink
                  to="/Information"
                  className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    isActive("/Information")
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon icon={faCar} className="mr-2" />
                  VEHICLES
                </NavLink>
                <NavLink
                  to="/Price"
                  className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    isActive("/Price")
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                  PRICE
                </NavLink>

                <NavLink
                  to="/Components"
                  className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    isActive("/Components")
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon icon={faCogs} className="mr-2" />
                  COMPONENTS
                </NavLink>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/#"
                className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  isActive("/")
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                HOME
              </NavLink>
              <NavLink
                to="/Information"
                className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  isActive("/Information")
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={faCar} className="mr-2" />
                VEHICLES
              </NavLink>
              <NavLink
                to="/Price"
                className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  isActive("/Price")
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                PRICE
              </NavLink>

              <NavLink
                to="/Components"
                className={`text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  isActive("/Components")
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={faCogs} className="mr-2" />
                COMPONENTS
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
