import { PortableTextBlock } from "next-sanity";

import { getPaketBySlug } from "@/sanity/fetch";
import CustomPortableText from "@/components/PortableTextComponent";
import { BadgePercent } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PaketPageProps {
  params: {
    slug: string;
  };
}
export default async function PaketPage({ params }: PaketPageProps) {
  const { slug } = params;
  const paket = await getPaketBySlug(slug);

  const { name, harga, description, blockContent } = paket;
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(harga);

  return (
    <>
      <div>
        <Breadcrumb className="padding-container">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container mx-auto py-10 padding-container min-h-screen ">
        <article className="lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-3 border-b mb-3 ">
            <div className="w-full">
              <h1 className="lg:text-3xl lg:w-5/12 font-bold text-md mb-1 lg:mb-3">
                Informasi lebih detail seputar paket {name}
              </h1>
              <div className="text-slate-500 text-xs">{description}</div>
            </div>
            <div className="lg:w-5/12">
              <Card className="w-full mt-5 lg:mt-0 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Paket {name}</CardTitle>
                      <CardDescription>Harga paket {name}</CardDescription>
                    </div>
                    <BadgePercent size={30} />
                  </div>
                </CardHeader>
                <CardContent className="text-3xl font-bold">
                  {formattedPrice}
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            {blockContent?.length && (
              <CustomPortableText
                className="w-full max-w-2xl text-slate-900 dark:text-white leading-relaxed"
                value={blockContent as PortableTextBlock[]}
              />
            )}
          </div>
        </article>
      </div>
    </>
  );
}
