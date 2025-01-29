import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";

export const metadata = {
  title: "Miro Rauhala",
  description: "",
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
      <body className="h-dvh bg-slate-950 text-white/90 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
