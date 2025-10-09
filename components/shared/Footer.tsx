"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1640px] mx-auto md:pt-16 py-8 px-8">
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
                className="w-auto h-auto"
              />
            </div>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Providing expert chiropractic care and whole-body wellness to help
              you live pain-free.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-primary text-lg">
              <Link href="">
                <FaFacebookF />
              </Link>
              <Link href="">
                <FaTwitter />
              </Link>
              <Link href="">
                <FaInstagram />
              </Link>
              <Link href="">
                <FaLinkedinIn />
              </Link>
              <Link href="">
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Culture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-primary">
                  Getting started
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Server status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Report a bug
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Chat support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contacts us</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-primary" />{" "}
                support@jachimekchiro.com
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-primary" /> (414) 687 - 5892
              </li>
              <li className="flex items-start gap-2">
                <HiOutlineLocationMarker className="text-primary mt-1 text-2xl" />
                <span>
                5111 Ehrlich Road Ste 128, Tampa, Florida 33624, United States
                  States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>Copyright © 2025 Jachimek Chiropractic & Wellness Center</p>
          <p>
            All Rights Reserved |{" "}
            <Link href="#" className="text-primary hover:underline">
              Terms and Conditions
            </Link>{" "}
            |{" "}  
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
