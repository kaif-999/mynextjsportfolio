// components/Header.js
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" w-full bg-zinc-50 py-4 ">
      <div className="container mx-auto p-4 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 hover:text-gray-700">
                Logo
              </span>
            </Link>
          </div>
          <div className="hidden md:flex justify-end items-center">
            <ul className="flex items-center">
              <li className="mr-6">
                <Link href="/about">
                  <span className="text-gray-600 hover:text-gray-900">About</span>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/blog">
                  <span className="text-gray-600 hover:text-gray-900">Blog</span>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/contact">
                  <span className="text-gray-600 hover:text-gray-900">Contact</span>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/contact">
                  <span className="text-gray-600 hover:text-gray-900">Quality Policy</span>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/contact">
                  <span className="text-gray-600 hover:text-gray-900">Products</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex justify-end items-center">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900 font-bold py-2 px-4 rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
            {menuOpen && (
              <ul className="absolute top-0 right-0 mt-12 mr-4 bg-white shadow-md rounded">
                <li className="py-2 px-4 border-b border-gray-200">
                  <Link href="/about">
                    <span className="text-gray-600 hover:text-gray-900">About</span>
                  </Link>
                </li>
                <li className="py-2 px-4 border-b border-gray-200">
                  <Link href="/blog">
                    <span className="text-gray-600 hover:text-gray-900">Blog</span>
                  </Link>
                </li>
                <li className="py-2 px-4">
                  <Link href="/contact">
                    <span className="text-gray-600 hover:text-gray-900">Contact</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;