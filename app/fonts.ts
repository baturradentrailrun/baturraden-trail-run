import { Londrina_Solid, Plus_Jakarta_Sans, Poppins } from "next/font/google";

const londrina = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export { londrina, plusJakartaSans, poppins };
