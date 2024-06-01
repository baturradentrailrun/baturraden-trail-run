import { Londrina_Solid, Plus_Jakarta_Sans } from "next/font/google";

const londrina = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export { londrina, plusJakartaSans };
