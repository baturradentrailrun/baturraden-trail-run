import { londrina } from "@/app/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center flex-col w-fit">
      <div className="text-xs font-black text-pink-600">baturraden</div>
      <div className={cn(londrina.className, "text-2xl font-black")}>
        Trail Run
      </div>
    </div>
  );
};

export default Logo;
