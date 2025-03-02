"use client";
import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          width={120} //
          height={55}
          alt="Logo"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-1 rounded-full py-2 shadow-md">
        <input type="text" className="w-full text-gray-600 flex-grow pl-5 bg-transparent outline-none" placeholder=" start your search.." />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 right-0 bg-red-400 mx-2 text-white rounded-full p-2 cursor-pointer"/>
      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer"/>
          <UserCircleIcon className="h-6 cursor-pointer"/>
        </div>
      </div>
    </header>
  );
}

