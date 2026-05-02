"use client";
import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";

const CATEGORIES = ["All", "Story", "Tech", "Science"];

export default function AllBooksPage() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/books")
      .then((r) => r.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return books.filter((book) => {
      const matchSearch = book.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory =
        category === "All" || book.category === category;
      return matchSearch && matchCategory;
    });
  }, [books, search, category]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-primary-container py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-newsreader text-4xl font-semibold text-white mb-2">
              All Books
            </h1>
            <p className="text-primary-fixed opacity-80">
              Browse our complete catalog of digital books.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          {/* Search Bar */}
          <div className="relative mb-8 max-w-2xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search books by title..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-2xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-base shadow-sm"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-60 shrink-0">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-24">
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">
                    filter_list
                  </span>
                  Categories
                </h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                        category === cat
                          ? "bg-primary text-white shadow-md"
                          : "text-slate-600 hover:bg-surface-container"
                      }`}
                    >
                      <span>{cat}</span>
                      {category === cat && (
                        <span className="material-symbols-outlined text-[16px]">
                          check
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Category counts */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                  {CATEGORIES.filter((c) => c !== "All").map((cat) => {
                    const count = books.filter(
                      (b) => b.category === cat
                    ).length;
                    return (
                      <div
                        key={cat}
                        className="flex justify-between text-xs text-slate-500"
                      >
                        <span>{cat}</span>
                        <span className="font-semibold text-secondary">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Books Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-slate-500">
                  {loading ? (
                    "Loading books..."
                  ) : (
                    <>
                      Showing{" "}
                      <span className="font-semibold text-on-surface">
                        {filtered.length}
                      </span>{" "}
                      {filtered.length === 1 ? "book" : "books"}
                      {category !== "All" && (
                        <span>
                          {" "}
                          in{" "}
                          <span className="text-secondary font-semibold">
                            {category}
                          </span>
                        </span>
                      )}
                    </>
                  )}
                </p>
                {(search || category !== "All") && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setCategory("All");
                    }}
                    className="text-xs text-secondary hover:underline flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      close
                    </span>
                    Clear filters
                  </button>
                )}
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 border border-slate-100 animate-pulse"
                    >
                      <div className="aspect-[2/3] rounded-lg bg-slate-200 mb-4" />
                      <div className="h-4 bg-slate-200 rounded mb-2" />
                      <div className="h-3 bg-slate-100 rounded w-2/3" />
                    </div>
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-20">
                  <span className="material-symbols-outlined text-6xl text-slate-300 mb-4 block">
                    search_off
                  </span>
                  <h3 className="font-newsreader text-2xl text-slate-400 mb-2">
                    No books found
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Try a different search term or category.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
