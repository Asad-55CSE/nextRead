import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import booksData from "@/data/books";
import FeaturedSwiper from "@/components/FeaturedSwiper";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";

export const metadata = {
  title: "NextRead – Find Your Next Read",
  description:
    "Explore our vast collection of digital books. Browse, filter by category, and borrow titles seamlessly.",
};

export default function HomePage() {
  const featuredBooks = booksData.slice(0, 4);
  const marqueeText =
    "New Arrivals: The Great Gatsby | Special Discount on Memberships | New Arrivals: Dune | Clean Code — Now Available | New Arrivals: Sapiens | Free Weekend Reading Access | ";

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />

      {/* Marquee */}
      <div className="bg-primary text-white py-3 border-b border-white/10 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content text-xs font-semibold tracking-widest uppercase">
            {marqueeText.repeat(3)}
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative min-h-[600px] lg:h-[820px] flex items-center overflow-hidden bg-primary-container">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&h=900&fit=crop"
              alt="Library"
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/90 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-20">
            <div className="max-w-2xl animate__animated animate__fadeInUp">
              <span className="text-xs font-semibold text-tertiary-fixed tracking-[0.2em] uppercase mb-4 block">
                Curating Human Knowledge
              </span>
              <h1 className="font-newsreader text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
                Find Your Next Read in our Digital Sanctuary.
              </h1>
              <p className="text-base md:text-lg text-primary-fixed mb-10 max-w-lg opacity-90">
                Access thousands of digital volumes, classic novels, and modern
                research papers from anywhere in the world.
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <Link
                  href="/books"
                  className="bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-on-secondary-container transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-2"
                >
                  Browse Now
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/register"
                  className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Join Free
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Featured Books */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-newsreader text-3xl md:text-4xl font-semibold text-primary mb-2">
                  Curated Editions
                </h2>
                <p className="text-slate-500">
                  Exceptional titles selected for this month&apos;s reading focus.
                </p>
              </div>
              <Link
                href="/books"
                className="text-secondary text-sm font-semibold flex items-center gap-1 hover:underline decoration-2 underline-offset-4 shrink-0 ml-4"
              >
                View All
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </section>

        {/* Swiper — New Arrivals Carousel */}
        <FeaturedSwiper books={booksData.slice(4, 10)} />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="py-20 bg-primary-container">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-newsreader text-3xl md:text-4xl font-semibold text-white mb-4">
              Start Your Reading Journey Today
            </h2>
            <p className="text-primary-fixed opacity-80 mb-8 text-lg">
              Join thousands of readers who borrow and discover books every day
              on NextRead.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/register"
                className="bg-secondary text-white px-8 py-4 rounded-xl font-semibold hover:bg-on-secondary-container transition-all shadow-lg hover:-translate-y-1"
              >
                Create Free Account
              </Link>
              <Link
                href="/books"
                className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Browse Library
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
