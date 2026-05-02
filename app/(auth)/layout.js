import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-16 relative">
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&h=900&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 w-full max-w-md">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
