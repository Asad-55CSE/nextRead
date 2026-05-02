"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/books", label: "All Books" },
    { href: "/profile", label: "My Profile" },
  ];

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully");
    router.push("/");
    router.refresh();
  };

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 w-full z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8 md:gap-12">
          <Link
            href="/"
            className="font-newsreader italic font-bold text-2xl text-indigo-900 shrink-0"
          >
            NextRead
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-newsreader text-lg tracking-tight font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-indigo-900 border-b-2 border-teal-600 pb-1 font-semibold"
                    : "text-slate-500 hover:text-teal-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Auth */}
        <div className="flex items-center gap-4">
          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse" />
          ) : session?.user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={36}
                    height={36}
                    className="rounded-full object-cover border-2 border-surface-container"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-white font-semibold text-sm">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="font-newsreader text-base font-medium text-indigo-900 max-w-[120px] truncate">
                  {session.user.name}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-secondary text-white px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 active:scale-95 hover:shadow-lg hover:bg-on-secondary-container"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="font-newsreader text-lg tracking-tight text-teal-600 font-medium hover:text-teal-700 transition-all duration-200 active:scale-95"
            >
              Login
            </Link>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-slate-600">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4 animate__animated animate__fadeIn animate__faster">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-newsreader text-lg font-medium py-2 ${
                pathname === link.href
                  ? "text-teal-600 font-semibold"
                  : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {session?.user && (
            <div className="flex items-center gap-2 py-2 border-t border-slate-100 mt-1">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white text-xs font-semibold">
                {session.user.name?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm text-slate-600">{session.user.name}</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
