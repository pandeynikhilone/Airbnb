"use client";
export const dynamic = "force-dynamic";
import hotels from "../../public/hotels.json";
import React, { Suspense } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import InfoCard from "./InfoCard";

// Extracted the search parameter logic into a separate component
function SearchResults() {
  const searchParams = useSearchParams();

  const location = searchParams.get("location") || "Unknown";
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const noOfGuests = searchParams.get("noOfGuests") || "1";

  const formattedStartDate = startDate
    ? format(new Date(startDate), "dd MMMM yy")
    : "N/A";
  const formattedEndDate = endDate
    ? format(new Date(endDate), "dd MMMM yy")
    : "N/A";
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <>
      <Header
        placeholder={`${location} | ${range} | ${
          noOfGuests > 1 ? "guests" : "guest"
        } ${noOfGuests}`}
      />
      <main className="flex">
        <section>
          <p className="text-xs">
            300+ Stays {range} for {noOfGuests}{" "}
            {noOfGuests > 1 ? "guests" : "guest"}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location || "Mars"}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>

      <div className="flex flex-col">
        {hotels?.map(
          ({ img, location, title, description, star, price, total }, index) => (
            <InfoCard
              key={index}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          )
        )}
      </div>
    </>
  );
}

function Search() {
  return (
    <div>
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Search;
