import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function PublicPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="public-site min-h-screen bg-[#09090b] text-white">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
