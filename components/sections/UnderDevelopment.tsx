import Image from "next/image";
import Logo from "../Logo";

export default function UnderDevelopment() {
  return (
    <div className="h-screen w-full">
      <div className="relative -z-10 flex w-full justify-center">
        <Image
          src={"/pattern-light.svg"}
          width={1440}
          height={500}
          alt="background"
          className="absolute max-h-screen object-cover dark:invert object-center  "
        />
      </div>

      <div className="text-center flex items-center h-screen flex-col justify-center gap-3">
        <Logo />
        <h3 className="text-5xl font-black">Comming Soon...</h3>
        <p>
          We are sorry, this page is under development. Please come back later
        </p>
      </div>
    </div>
  );
}
