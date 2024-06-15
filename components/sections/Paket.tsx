import CustomButton from "../CustomButton";
import CardPaket from "../CardPaket";
import { getPaket } from "@/sanity/fetch";
import { CardPaketProps } from "@/types";
import { LucideDownloadCloud } from "lucide-react";

interface PaketProps {
  id: string;
}
export const revalidate = 100;
const Paket: React.FC<PaketProps> = async ({ id }) => {
  const paket = await getPaket();

  return (
    <div
      id={id}
      className="bg-[#F2F2F2] padding-container flex lg:flex-row flex-col-reverse justify-between w-full py-10 gap-10 lg:gap-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
        {paket.map((p: CardPaketProps, index: number) => (
          <div key={index}>
            <CardPaket
              name={p.name}
              description={p.description}
              harga={p.harga}
              index={index}
              slug={p.slug?.current ? { current: p.slug.current } : undefined}
            />
          </div>
        ))}
      </div>
      <div className="w-full lg:w-6/12 flex items-center justify-center">
        <div className="lg:w-9/12 lg:mx-auto flex flex-col gap-5">
          <h2 className="text-slate-900 text-3xl font-bold text-left w-fit">
            Sesuaikan larimu!
          </h2>
          <p className="text-slate-900">
            Mulai dari yang terdekat sedekat hati sampai finish terjauh, kami
            hadirkan dua paket yang sudah pasti cocok untuk semua insan berjiwa
            olahraga 🥰
          </p>
          <CustomButton
            href="https://drive.google.com/file/d/1YiiMzA73_tBLSTU082LTBnaaJ_0g4hcg/view?usp=sharing"
            variants={"default"}
            roundedFull
            className="w-full flex items-center gap-3 md:w-fit"
          >
            Unduh Manual <LucideDownloadCloud size={20} />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Paket;
