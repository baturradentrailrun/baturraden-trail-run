import Image from "next/image";
import Logo from "../Logo";

export default function Infolebihlanjut() {
  return (
    <div className="h-[400px] relative w-full flex justify-center items-center overflow-hidden">
      <Image
        src={"/pattern-light.svg"}
        width={1440}
        height={500}
        alt="background"
        className="absolute  lg:max-h-screen object-cover dark:invert object-center  "
      />
      <div className="text-center flex items-center h-screen flex-col justify-center gap-3 padding-container">
        <Logo />
        <h3 className="text-2xl  font-black capitalize">
          Informasi lebih lanjut
        </h3>
        <p className="text-slate-300">
          Informasi akan diberitahu lebih lanjut di kemudian hari
        </p>
      </div>
    </div>
  );
}
