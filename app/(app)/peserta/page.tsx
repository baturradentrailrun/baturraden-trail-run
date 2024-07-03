import { DataTable } from "@/components/DataTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getFile, getPeserta } from "@/sanity/fetch";
import React from "react";

export const revalidate = 10;

const Peserta = async () => {
  const dataPeserta = await getFile();
  console.log(dataPeserta);

  return (
    <div>
      <div>
        <Breadcrumb className="padding-container py-5 mb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Daftar peserta</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="padding-container pb-20 border-b">
        <h1 className="text-5xl font-bold py-5">Daftar peserta perlombaan</h1>
        <p>Cari nama kamu apakah sudah ada di dalam list kami!</p>
      </div>
      <div className="padding-container py-5 mb-5">
        <DataTable data={dataPeserta} />
      </div>
    </div>
  );
};

export default Peserta;
