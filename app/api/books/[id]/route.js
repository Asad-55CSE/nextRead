import { NextResponse } from "next/server";
import booksData from "@/data/books";

export async function GET(request, { params }) {
  const book = booksData.find((b) => b.id === params.id);

  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  return NextResponse.json(book);
}
