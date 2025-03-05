"use client";
import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/navigation";

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  function cancelInput() {
    setSearchInput("");
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function search() {
    if(searchInput === "") return;
    const queryParams = new URLSearchParams({
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      noOfGuests: noOfGuests,
    }).toString();

    router.push(`search?${queryParams}`);
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer"
      >
        <Image
          src="https://links.papareact.com/qd3"
          width={120}
          height={55}
          alt="Logo"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-1 rounded-full py-2 shadow-md">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="w-full text-gray-600 flex-grow pl-5 bg-transparent outline-none"
          placeholder={`${placeholder || "Start your search"}`}
        />
        <button onClick={search}>
          <MagnifyingGlassIcon className="hidden md:inline-flex h-8 right-0 bg-red-400 mx-2 text-white rounded-full p-2 cursor-pointer" />
        </button>
      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserCircleIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              onClick={cancelInput}
              className="flex-grow cursor-pointer text-red-400"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow cursor-pointer text-gray-500"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
