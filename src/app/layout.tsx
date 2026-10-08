import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import { company } from "@/content/site";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-archivo" });
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex" });

const title = `${company.name} | Technical solutions in ${company.city}`;
const description = `${company.summary} CCTV & security, electrical, home automation, networking, maintenance and consultation.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_TZ",
    images: [{ url: "/brand/kbts-logo.png", width: 782, height: 596, alt: "KBTS logo" }],
  },
  icons: { icon: "/brand/kbts-logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#16232a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: the inline script may set lang/data-lang before React hydrates
    <html lang="en" data-lang="en" className={`${archivo.variable} ${plex.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("kbts-lang")==="sw"){var h=document.documentElement;h.dataset.lang="sw";h.lang="sw"}}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
