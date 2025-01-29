import { Footer } from "@/app/footer";
import { Nav } from "@/app/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-(--breakpoint-md) py-32">{children}</div>
      <Footer />
    </>
  );
}
