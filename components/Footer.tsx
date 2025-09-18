"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1640px] mx-auto md:py-16 py-8 px-8">
        {/* ⭐ Grid 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/footer/logo.png"
                alt="Logo"
                width={195}
                height={70}
              />
            </div>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-primary text-lg">
              <a href=""><FaFacebookF /></a>
              <a href=""><FaTwitter /></a>
              <a href=""><FaInstagram /></a>
              <a href=""><FaLinkedinIn /></a>
              <a href=""><FaYoutube /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-green-700">Features</a></li>
              <li><a href="#" className="hover:text-green-700">Pricing</a></li>
              <li><a href="#" className="hover:text-green-700">Case studies</a></li>
              <li><a href="#" className="hover:text-green-700">Reviews</a></li>
              <li><a href="#" className="hover:text-green-700">Updates</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-green-700">About</a></li>
              <li><a href="#" className="hover:text-green-700">Contact us</a></li>
              <li><a href="#" className="hover:text-green-700">Careers</a></li>
              <li><a href="#" className="hover:text-green-700">Culture</a></li>
              <li><a href="#" className="hover:text-green-700">Blog</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-green-700">Getting started</a></li>
              <li><a href="#" className="hover:text-green-700">Help center</a></li>
              <li><a href="#" className="hover:text-green-700">Server status</a></li>
              <li><a href="#" className="hover:text-green-700">Report a bug</a></li>
              <li><a href="#" className="hover:text-green-700">Chat support</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contacts us</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-green-700" /> support@jachimekchiro.com
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-green-700" /> 813.960.2225
              </li>
              <li className="flex items-start gap-2">
                <HiOutlineLocationMarker className="text-green-700 mt-1" /> 
                <span>5111 Ehrlich Road Ste 128, <br /> Tampa, Florida 33624, United States</span> 
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>Copyright © 2025 Jachimek Chiropractic & Wellness Center</p>
          <p>
            All Rights Reserved |{" "}
            <a href="#" className="text-green-700 hover:underline">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="text-green-700 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
