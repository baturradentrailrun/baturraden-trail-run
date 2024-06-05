import { cn } from "@/lib/utils";
import { CardInfoItemProps } from "@/types";
import React from "react";
import { Skeleton } from "./ui/skeleton";

const CardInfoItem = ({
  data,
  index,
}: {
  data: CardInfoItemProps;
  index: number;
}) => {
  const { description, status, duration } = data;
  const { start, end } = duration;

  const formatDateToIndonesian = (
    dateString: string,
    isStart: boolean
  ): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: isStart ? undefined : "numeric", // Exclude year for start date
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };
  const bgColor =
    index === 0 ? "bg-red-500" : index === 1 ? "bg-orange-500" : "bg-green-500";
  return (
    <div
      className={cn(
        index === 1 && "border-x px-3 border-dashed border-slate-500 dash10",
        "flex flex-col gap-5 w-fit"
      )}
    >
      <p className={"text-xs font-bold text-slate-900"}>
        {formatDateToIndonesian(start, true)} s/d{" "}
        {formatDateToIndonesian(end, false)}
      </p>
      <h3
        className={cn(
          bgColor,
          "font-bold p-2 rounded-lg text-center  text-white capitalize w-[200px]"
        )}
      >
        {status}
      </h3>
      <p className="capitalize text-xs w-[200px]">{description}</p>
    </div>
  );
};

export default CardInfoItem;
