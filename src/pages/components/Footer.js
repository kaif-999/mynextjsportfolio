// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className= "w-full flex-col bg-slate-300 py-12 md:py-6 lg:py-4 xl:py-2">
      <div className="container mx-auto p-4 md:p-6 lg:p-4 xl:p-2">
        <div className="flex flex-wrap justify-center md:justify-between lg:justify-between xl:justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
            <h5 className="uppercase text-lg md:text-base lg:text-sm xl:text-xs">About Us</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <Link href="/about">
                  <span className="text-gray-600 hover:text-gray-900">Our Story</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/team">
                  <span className="text-gray-600 hover:text-gray-900">Our Team</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <span className="text-gray-600 hover:text-gray-900">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
            <h5 className="uppercase text-lg md:text-base lg:text-sm xl:text-xs">Resources</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <Link href="/blog">
                  <span className="text-gray-600 hover:text-gray-900">Blog</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/faq">
                  <span className="text-gray-600 hover:text-gray-900">FAQ</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/support">
                  <span className="text-gray-600 hover:text-gray-900">Support</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 lg:mb-0 xl:mb-0">
            <h5 className="uppercase text-lg md:text-base lg:text-sm xl:text-xs">Social Media</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => window.open('https://twitter.com/yourtwitterhandle', '_blank')}>Twitter</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => window.open('https://facebook.com/yourfacebookhandle', '_blank')}>Facebook</span>
              </li>
              <li className="mb-2">
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer" onClick={() => window.open('https://instagram.com/yourinstagramhandle', '_blank')}>Instagram</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm md:text-xs lg:text-xs xl:text-xs">
          &copy; 2023 Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;