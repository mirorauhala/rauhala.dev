import "@/styles/globals.css";

export const metadata = {
  title: "Miro Rauhala",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black dark:text-white/90">{children}</body>
    </html>
  );
}
