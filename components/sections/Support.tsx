"use client";

import React, { useEffect, useState } from "react";
import CarouselLogo from "../CarouselLogo";
import { getSponsorship } from "@/sanity/fetch";
import { CarouselImageProps } from "@/types";

const Support = () => {
  const [sponsorship, setSponsorship] = useState<CarouselImageProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSponsorship();
        setSponsorship(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sponsorship:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-950 text-white padding-container py-10">
      <div className="max-container padding-container flex justify-center items-center flex-col">
        <p className="capitalize mb-10">wujudkan generasi sehat bersama</p>
        <CarouselLogo data={sponsorship} />
      </div>
    </div>
  );
};

export default Support;
