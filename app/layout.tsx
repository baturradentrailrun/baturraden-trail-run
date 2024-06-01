import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { londrina, plusJakartaSans } from "./fonts";
import { ThemeProvider } from "@/components/provider/theme-provider";

export const metadata: Metadata = {
  title: "Baturaden Trail Run",
  description: "Wujudkan generasi sehat bersama Baturaden Trail Run",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
