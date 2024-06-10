import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ButtonProps, buttonVariants } from "./ui/button";

type CustomButtonProps = {
  href: string;
  variants?: ButtonProps["variant"];
  children: React.ReactNode;
  roundedFull?: boolean;
  size?: ButtonProps["size"];
  className?: string;
  target?: string;
};
const CustomButton = ({
  href,
  variants,
  children,
  roundedFull,
  size,
  className,
  target = "_blank",
}: CustomButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        buttonVariants({ variant: variants, size: size, className: className }),
        roundedFull && "rounded-full"
      )}
    >
      {children}
    </Link>
  );
};

export default CustomButton;
