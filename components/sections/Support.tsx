import CarouselLogo from "../CarouselLogo";
import { getSponsorship } from "@/sanity/fetch";
import { CarouselImageProps } from "@/types";

export const revalidate = 100;
const Support = async () => {
  const sponsorship: CarouselImageProps[] = await getSponsorship();

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
