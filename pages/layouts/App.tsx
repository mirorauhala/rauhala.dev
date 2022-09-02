import { Navigation } from "../../components/Navigation";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Navigation />
    </div>
  );
}
