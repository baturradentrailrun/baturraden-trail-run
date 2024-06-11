import { cn } from "@/lib/utils";
import { CardInfoItemProps } from "@/types";
import React from "react";

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
      year: isStart ? undefined : "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };
  const bgColor =
    index === 0 ? "bg-red-600" : index === 1 ? "bg-orange-600" : "bg-green-600";
  return (
    <div
      className={cn(
        index === 1 &&
          "border-y lg:border-x lg:border-y-0 py-3 lg:py-0 px-3 border-dashed border-slate-500 ",
        "flex flex-col  gap-5 lg:w-fit"
      )}
    >
      <p
        className={"text-xs font-bold text-slate-900 text-center lg:text-start"}
      >
        {formatDateToIndonesian(start, true)} s/d{" "}
        {formatDateToIndonesian(end, false)}
      </p>
      <h3
        className={cn(
          bgColor,
          "font-bold p-2 rounded-full lg:rounded-lg text-center  text-white capitalize lg:w-[200px] "
        )}
      >
        {status}
      </h3>
      <p className="capitalize text-xs lg:w-[200px] text-slate-900">
        {description}
      </p>
    </div>
  );
};

export default CardInfoItem;
