import type { Metadata } from "next";
import { Saira, Cormorant_Garamond, Poppins, Montserrat } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll";
import ParamTracker from "./components/param-tracker";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: false,
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Imersão ARI — Dobrar o Capital em 3 Anos",
  description: "Aprenda o método que dobra patrimônio em 3 anos com a solidez do mercado imobiliário catarinense.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="pt-BR"
      className={` ${saira.variable} ${cormorantGaramond.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
    >
      <body suppressHydrationWarning className="bg-black font-saira-thin min-h-full flex flex-col">
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://load.tss.arck1pro.com.br/7msfshruhgdg.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','8t=DgBaLyE%2FRUY%2FPFFeMyQmVRFZVUZEVAwdWgUVCx5DGAEISgQHGFwKAQ%3D%3D');` }} />
        <Script src="/countdown.js" strategy="afterInteractive" />
        <Script src="/scroll-effect.js" strategy="afterInteractive" />
        <SmoothScroll />
        <Suspense fallback={null}>
          <ParamTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
