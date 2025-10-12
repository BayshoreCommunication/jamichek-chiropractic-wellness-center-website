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
          <div className="md:col-span-2 max-w-[80%]">
            <div className="flex items-start gap-3">
              <Image
                src="/images/footer/logo.png"
                alt="Logo"
                width={195}
                height={70}
                className="w-auto h-auto"
              />
            </div>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Providing expert chiropractic care and whole-body wellness to help
              you live pain-free.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-primary text-lg">
              <div className="flex gap-4 mt-4 text-primary text-lg">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li>
                <a href="/" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-primary">
                  Let Us Help You
                </a>
              </li>
              <li>
                <a
                  href="https://jamichek-weight-loss-tampa-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Weight Loss Services
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-primary">
                  Meet The Team
                </a>
              </li>
              <li>
                <a href="/the-wellness-journal" className="hover:text-primary">
                  The Wellness Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-base text-gray-600">
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="/disclaimers" className="hover:text-primary">
                  Disclaimers
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="hover:text-primary">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-base text-gray-600">
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
                  5111 Ehrlich Road Ste 128, <br /> Tampa, Florida 33624, United
                  States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-base text-gray-600">
          <p>Copyright © 2025 Jachimek Chiropractic & Wellness Center</p>
          <p>
            All Rights Reserved |{" "}
            <Link href="#" className="text-primary hover:underline">
              Terms and Conditions
            </Link>{" "}
            |{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
