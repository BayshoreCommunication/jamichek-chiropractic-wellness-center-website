"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="">
      {/* Top Bar */}
      <div className="bg-black text-white text-center text-sm py-4">
        $47 New Patient Special
      </div>
      <header className="max-w-[1640px] mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}

        <div className="flex items-center space-x-2">
          <Image
            src="/images/hero/logo.png"
            alt="Logo"
            width={195}
            height={70}
            className="w-auto h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center text-black">
          <a href="#" className="text-primary font-medium">
            Home
          </a>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-primary">
              <span>Let us help you</span>
              <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="">
                {/* absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4 w-48 text-gray-800 */}
              </div>
            )}
          </div>
          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-primary">
              <span>Weight Loss Services</span>
              <ChevronDown size={16} />
            </button>
            {dropdownOpen && <div className=""></div>}
          </div>

          <a href="#" className="hover:text-primary">
            Meet The Team
          </a>
          <a href="#" className="hover:text-primary">
            The Wellness Journal
          </a>

          <a
            href="tel:8139602225"
            className="bg-primary text-white px-4 py-2 rounded-md flex items-center space-x-2"
          >
            <Phone size={16} /> <span>813 960 2225</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-8 py-4 flex flex-col space-y-4 text-gray-800">
          <a href="#" className="block text-primary font-medium">
            Home
          </a>

          <details>
            <summary className="cursor-pointer">Let us help you</summary>
            <div className="ml-4 flex flex-col space-y-2">
              {/* <a href="#" className="hover:text-primary">Pain Relief</a>
              <a href="#" className="hover:text-primary">Injury Recovery</a>
              <a href="#" className="hover:text-primary">Wellness</a> */}
            </div>
          </details>

          <details>
            <summary className="cursor-pointer">Weight Loss Services</summary>
            <div className="ml-4 flex flex-col space-y-2">
              {/* <a href="#" className="hover:text-primary">Program 1</a>
              <a href="#" className="hover:text-primary">Program 2</a> */}
            </div>
          </details>

          <a href="#" className="hover:text-primary">
            Meet The Team
          </a>
          <a href="#" className="hover:text-primary">
            The Wellness Journal
          </a>

          <a
            href="tel:8139602225"
            className="bg-primary text-white px-4 py-2 rounded-md text-center"
          >
            Call: 813 960 2225
          </a>
        </div>
      )}
    </div>
  );
}
