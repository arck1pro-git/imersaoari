import type { Metadata } from "next";
import { Saira, Cormorant_Garamond, Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll";
import ParamTracker from "./components/param-tracker";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
      lang="en"
      className={` ${saira.variable} ${cormorantGaramond.variable} ${poppins.variable} antialiased`}
    >
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://load.tss.arck1pro.com.br/7msfshruhgdg.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','8t=DgBaLyE%2FRUY%2FPFFeMyQmVRFZVUZEVAwdWgUVCx5DGAEISgQHGFwKAQ%3D%3D');` }} />
        <script src="/countdown.js" async></script>
        <script src="/scroll-effect.js" async></script>
      </head>
      <body suppressHydrationWarning className="bg-black font-saira-thin min-h-full flex flex-col">
        <SmoothScroll />
        <Suspense fallback={null}>
          <ParamTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
