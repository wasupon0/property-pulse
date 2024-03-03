import PropertyCard from "@/components/PropertyCard";
import properties from "@/properties.json";
import Link from "next/link";
import React from "react";

const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="px-4 py-6 m-auto container-xl lg:container">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
