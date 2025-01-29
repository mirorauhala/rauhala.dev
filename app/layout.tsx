import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Miro Rauhala",
  description: "",
  alternates: {
    canonical: "https://rauhala.dev",
    types: {
      "application/rss+xml": [{ url: "/rss", title: "Miro Rauhala - Posts" }],
    },
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} selection:bg-red-600 selection:text-white`}
    >
      <Head>
        <link
          rel="alternate"
          hrefLang="en"
          type="application/rss+xml"
          title="Miro's Posts"
          href="/rss"
        />
      </Head>
      <body className="h-dvh bg-slate-950 text-white/90 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
