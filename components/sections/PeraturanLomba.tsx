import Image from "next/image";
import Logo from "../Logo";
import CustomButton from "../CustomButton";

export default function PeraturanLomba({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="h-[600px] relative w-full flex justify-center items-center overflow-hidden "
    >
      <Image
        src={"/pattern-light.svg"}
        width={1440}
        height={500}
        alt="background"
        className="absolute  lg:max-h-screen h-full object-cover dark:invert object-center z-0  "
      />
      <div className="text-center flex z-10 items-center h-screen flex-col justify-center gap-3 padding-container">
        <Logo />
        <h3 className="text-2xl  font-black capitalize">
          Informasi Peraturan Perlombaan
        </h3>
        <p>
          Informasi lebih lanjut seputar peraturan perlombaan yang harus
          diperhatikan
        </p>

        <CustomButton
          roundedFull
          href="/peraturan-lomba"
          variants={"instagram"}
        >
          Peraturan perlombaan
        </CustomButton>
      </div>
    </section>
  );
}
