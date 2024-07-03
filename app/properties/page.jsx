import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import properties from "@/properties.json";
import { fetchProperties } from "@/utils/requests";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  //sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <section className="py-4 bg-blue-700">
        <div className="flex flex-col items-start px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>{" "}
      <section className="px-4 py-6">
        <div className="px-4 py-6 m-auto container-xl lg:container">
          <Link
            href="/properties"
            className="flex items-center mb-3 text-blue-500 hover:underline"
          >
            <FaArrowAltCircleLeft className="mb-1 mr-2" />
            Back To Properties
          </Link>
          <h1 className="mb-4 text-2xl">Search Results</h1>
          {properties.length === 0 ? (
            <p>No search results found</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
