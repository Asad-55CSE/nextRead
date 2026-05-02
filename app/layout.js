import "./globals.css";
import "animate.css";
import { Inter, Newsreader } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata = {
  title: "NextRead – Digital Book Borrowing Platform",
  description:
    "Explore a vast collection of books, filter by categories, and borrow titles digitally. A seamless modern library experience.",
  keywords: ["books", "library", "digital", "borrow", "read", "nextread"],
  openGraph: {
    title: "NextRead – Digital Book Borrowing Platform",
    description: "Your digital library for borrowing and discovering books.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Material Symbols — icon font, not a page font, safe to load via link */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              fontFamily: "Inter, sans-serif",
              borderRadius: "12px",
              fontSize: "14px",
            },
            success: {
              iconTheme: {
                primary: "#006a6a",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ba1a1a",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
