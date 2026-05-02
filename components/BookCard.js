import Link from "next/link";
import Image from "next/image";

export default function BookCard({ book, showDetails = true }) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
      <div className="relative aspect-[2/3] mb-6 rounded-lg overflow-hidden bg-slate-100 book-spine-effect">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              book.available_quantity > 5
                ? "bg-green-100 text-green-700"
                : book.available_quantity > 2
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {book.available_quantity > 0
              ? `${book.available_quantity} left`
              : "Unavailable"}
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-1">
          {book.category}
        </span>
        <h3 className="font-newsreader text-xl font-semibold text-primary mb-1 leading-tight line-clamp-2">
          {book.title}
        </h3>
        <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
          {book.author}
        </p>
        {showDetails && (
          <Link
            href={`/books/${book.id}`}
            className="mt-auto w-full py-3 border border-outline text-primary text-sm font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            View Details
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
