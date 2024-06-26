import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { plusJakartaSans } from "../fonts";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Baturaden Trail Run",
  description: "Wujudkan generasi sehat bersama Baturaden Trail Run",
  keywords: ["trail run", "baturraden", "festival"],
  applicationName: "Baturaden Trail Run",
  metadataBase: new URL("https://baturradentrailrun.com"),

  openGraph: {
    title: "Baturraden Trail Run",
    description: "Wujudkan generasi sehat bersama Baturaden Trail Run",
    images: "/opengraph-image.jpg",
    countryName: "Indonesia",
    emails: ["baturradentrailrun@gmail.com"],
    url: "https://baturradentrailrun.com",
    siteName: "Baturraden Trail Run",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <GoogleTagManager
        gtmId={`${process.env.NEXT_PUBLIC_GOOGLETAGMANAGER_ID}`}
      />
      <body
        className={cn(plusJakartaSans.className, "scroll-smooth")}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} />
    </html>
  );
}
