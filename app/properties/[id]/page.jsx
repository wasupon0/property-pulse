"use client";

import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import { fetchProperty } from "@/utils/requests";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="mt-10 text-2xl font-bold text-center">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
