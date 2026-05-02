"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "./BookCard";
import Link from "next/link";

export default function FeaturedSwiper({ books }) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-newsreader text-3xl md:text-4xl font-semibold text-primary mb-2">
              More to Explore
            </h2>
            <p className="text-slate-500">
              Discover more titles across all genres.
            </p>
          </div>
          <Link
            href="/books"
            className="text-secondary text-sm font-semibold flex items-center gap-1 hover:underline shrink-0 ml-4"
          >
            All Books
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
