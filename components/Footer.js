import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full py-16 mt-auto border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand */}
        <div className="max-w-sm">
          <div className="font-newsreader font-bold text-xl text-indigo-900 mb-4">
            NextRead
          </div>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed">
            Advancing human knowledge through a sophisticated intersection of
            classical academic tradition and high-performance digital utility.
          </p>
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-900 hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                rss_feed
              </span>
            </a>
            <a
              href="mailto:contact@nextread.app"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-900 hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                mail
              </span>
            </a>
            <a
              href="https://nextread.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-900 hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                public
              </span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-indigo-900 uppercase tracking-widest mb-1">
              Library
            </h4>
            <Link
              href="/books"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              All Books
            </Link>
            <Link
              href="/"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              New Arrivals
            </Link>
            <Link
              href="/books?category=Tech"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              Tech Books
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-indigo-900 uppercase tracking-widest mb-1">
              Account
            </h4>
            <Link
              href="/login"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              Register
            </Link>
            <Link
              href="/profile"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              My Profile
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-indigo-900 uppercase tracking-widest mb-1">
              Support
            </h4>
            <a
              href="mailto:contact@nextread.app"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-indigo-900 hover:underline decoration-teal-500 underline-offset-4 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} NextRead Digital Library. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-sm text-slate-400">Smarter Everyday</span>
        </div>
      </div>
    </footer>
  );
}
