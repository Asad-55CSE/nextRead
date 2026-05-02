import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 rounded-3xl bg-surface-container mx-auto flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl text-slate-400">
              menu_book
            </span>
          </div>
          <h1 className="font-newsreader text-6xl font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="font-newsreader text-2xl font-semibold text-on-surface mb-4">
            Page Not Found
          </h2>
          <p className="text-slate-500 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-secondary text-white px-8 py-3 rounded-xl font-semibold hover:brightness-110 transition-all"
            >
              Go Home
            </Link>
            <Link
              href="/books"
              className="border border-outline-variant text-on-surface px-8 py-3 rounded-xl font-medium hover:bg-surface-container transition-all"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
