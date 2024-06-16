import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import CustomPortableText from "@/components/PortableTextComponent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getPeraturan } from "@/sanity/fetch";
import { PortableTextBlock } from "next-sanity";

import React from "react";

export const revalidate = 100;
const PeraturanLomba = async () => {
  const data = await getPeraturan();

  return (
    <div>
      <nav className="w-full flex justify-between items-center padding-container py-2 border-b mb-5 shadow-lg">
        <Logo />
        <ModeToggle />
      </nav>
      <div>
        <Breadcrumb className="padding-container mb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Peraturan Lomba</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="padding-container pb-20 border-b">
        <h1 className=" text-5xl font-bold py-5">
          Detail peraturan perlombaan
        </h1>
        <p>Baca dan cermati baik - baik peraturan lomba di bawah ini!</p>
      </div>
      <div className="padding-container mt-5">
        {data?.length ? (
          data.map((item: any) => (
            <div
              key={item._id}
              className="w-full max-w-2xl text-slate-900 dark:text-white"
            >
              <CustomPortableText
                className="w-full max-w-2xl text-slate-900 dark:text-white"
                value={item.content as PortableTextBlock[]}
              />
            </div>
          ))
        ) : (
          <div>No peraturan found.</div>
        )}
      </div>
    </div>
  );
};

export default PeraturanLomba;
