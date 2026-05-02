import { NextResponse } from "next/server";
import booksData from "@/data/books";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  let filtered = booksData;

  if (search) {
    filtered = filtered.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (category && category !== "All") {
    filtered = filtered.filter((book) => book.category === category);
  }

  return NextResponse.json(filtered);
}
