"use client";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { CardInfoItemProps } from "@/types";
import { getRoadmap } from "@/sanity/fetch";
import RoadmapSkeleton from "./skeleton/RoadmapSkeleton";
import CardInfoItem from "./CardInfoItem";

const CardInfoEvent = () => {
  const [roadmap, setRoadmap] = useState<CardInfoItemProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRoadmap();
        setRoadmap(data);
      } catch (error) {
        console.error("Error fetching roadmap:", error);
      }
    };

    fetchData();
  }, []);

  const statusOrder: { [key: string]: number } = {
    "baturraden trail run": 0,
    "virtual run": 1,
    "trail run opening & Race": 2,
  };

  const sortedRoadmap = roadmap.sort((a, b) => {
    return statusOrder[a.status] - statusOrder[b.status];
  });

  return (
    <>
      {roadmap.length === 0 ? (
        <RoadmapSkeleton />
      ) : (
        <Card className="rounded-t-3xl dark:border-none rounded-b-none lg:rounded-xl p-5 bg-slate-100 ">
          <div className="flex flex-col lg:flex-row gap-5 justify-center lg:items-start items-center">
            {sortedRoadmap.map((item: CardInfoItemProps, index: number) => (
              <div key={index}>
                <CardInfoItem data={item} index={index} />
              </div>
            ))}
          </div>
        </Card>
      )}
    </>
  );
};

export default CardInfoEvent;
