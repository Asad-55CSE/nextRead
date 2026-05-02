"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function BookDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borrowing, setBorrowing] = useState(false);
  const [borrowed, setBorrowed] = useState(false);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
      return;
    }
    fetch(`/api/books/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Book not found.");
        router.push("/books");
      });
  }, [id, session, isPending, router]);

  const handleBorrow = async () => {
    if (!session?.user) {
      toast.error("Please log in to borrow books.");
      router.push("/login");
      return;
    }
    if (book.available_quantity <= 0) {
      toast.error("Sorry, this book is currently unavailable.");
      return;
    }
    setBorrowing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setBorrowing(false);
    setBorrowed(true);
    toast.success(`"${book.title}" has been borrowed successfully! Happy reading! 📚`);
  };

  if (isPending || loading) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-500">Loading book details...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!book) return null;

  const availabilityColor =
    book.available_quantity > 5
      ? "text-green-700 bg-green-100"
      : book.available_quantity > 2
      ? "text-yellow-700 bg-yellow-100"
      : book.available_quantity > 0
      ? "text-orange-700 bg-orange-100"
      : "text-red-700 bg-red-100";

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-100 py-3 px-6">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <Link
              href="/books"
              className="hover:text-secondary transition-colors"
            >
              All Books
            </Link>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="text-on-surface font-medium line-clamp-1">
              {book.title}
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm aspect-[2/3] rounded-3xl overflow-hidden book-spine-effect shadow-2xl">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 400px"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="animate__animated animate__fadeInRight">
              {/* Category tag */}
              <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {book.category}
              </span>

              <h1 className="font-newsreader text-3xl md:text-4xl font-bold text-primary mb-3 leading-tight">
                {book.title}
              </h1>

              <p className="text-slate-500 text-base mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">
                  person
                </span>
                <span className="font-medium">{book.author}</span>
              </p>

              {/* Availability badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${availabilityColor}`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    book.available_quantity > 0
                      ? "bg-current"
                      : "bg-red-500"
                  }`}
                />
                {book.available_quantity > 0
                  ? `${book.available_quantity} ${
                      book.available_quantity === 1 ? "copy" : "copies"
                    } available`
                  : "Currently Unavailable"}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-semibold text-on-surface mb-3 text-sm uppercase tracking-wider">
                  About this Book
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {book.description}
                </p>
              </div>

              {/* Book info grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Category
                  </p>
                  <p className="font-semibold text-on-surface text-sm">
                    {book.category}
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Available Copies
                  </p>
                  <p className="font-semibold text-on-surface text-sm">
                    {book.available_quantity}
                  </p>
                </div>
              </div>

              {/* Borrow Button */}
              {borrowed ? (
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4">
                  <span
                    className="material-symbols-outlined text-green-600 text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <div>
                    <p className="font-semibold text-green-700">
                      Successfully Borrowed!
                    </p>
                    <p className="text-xs text-green-600">
                      Enjoy your reading experience.
                    </p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleBorrow}
                  disabled={borrowing || book.available_quantity === 0}
                  className="w-full py-4 bg-secondary text-white rounded-2xl font-semibold text-base scholarly-card-shadow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {borrowing ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : book.available_quantity === 0 ? (
                    <>
                      <span className="material-symbols-outlined">
                        block
                      </span>
                      Unavailable
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">
                        menu_book
                      </span>
                      Borrow This Book
                    </>
                  )}
                </button>
              )}

              <Link
                href="/books"
                className="mt-4 w-full py-3 border border-outline-variant text-slate-600 rounded-2xl font-medium text-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
                Back to All Books
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
