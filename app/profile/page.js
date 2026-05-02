"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully.");
    router.push("/");
    router.refresh();
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-500">Loading profile...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!session?.user) return null;

  const user = session.user;
  const joinedDate = new Date(user.createdAt || Date.now()).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-8 py-12 w-full">
        {/* Profile Header */}
        <div className="mb-8">
          <h1 className="font-newsreader text-3xl font-semibold text-primary mb-1">
            My Profile
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your account and view your activity.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-start">
          {/* Profile Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 book-shadow border border-slate-100">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover border-4 border-surface-container"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-primary-container border-4 border-surface-container flex items-center justify-center text-white text-5xl font-newsreader font-semibold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="absolute bottom-1 right-1 bg-secondary text-white p-2 rounded-full flex items-center justify-center shadow-lg">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                </div>
              </div>

              <h2 className="font-newsreader text-2xl font-semibold text-primary mb-1">
                {user.name}
              </h2>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
                Member
              </p>

              {/* User Info */}
              <div className="w-full space-y-3 mb-8 text-left">
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">
                      mail
                    </span>
                    Email
                  </span>
                  <span className="text-on-surface font-medium text-sm truncate max-w-[180px]">
                    {user.email}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">
                      calendar_month
                    </span>
                    Joined
                  </span>
                  <span className="text-on-surface font-medium text-sm">
                    {joinedDate}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">
                      badge
                    </span>
                    Status
                  </span>
                  <span className="text-secondary font-semibold text-sm">
                    Active
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <Link
                href="/profile/update"
                className="w-full bg-secondary text-white py-3.5 rounded-xl font-semibold shadow-md shadow-secondary/20 hover:bg-on-secondary-container transition-all active:scale-[0.98] flex items-center justify-center gap-2 mb-3"
              >
                <span className="material-symbols-outlined text-xl">
                  edit_note
                </span>
                Update Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full border border-outline-variant text-slate-600 py-3.5 rounded-xl font-medium text-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  logout
                </span>
                Logout
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Borrowed */}
            <div className="bg-primary-container text-white p-8 rounded-3xl flex flex-col justify-between overflow-hidden relative">
              <span
                className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-[120px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_stories
              </span>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                Total Borrowed
              </p>
              <h2 className="font-newsreader text-6xl font-bold">0</h2>
              <p className="text-white/70 text-sm mt-6">
                Start borrowing books to see your stats!
              </p>
            </div>

            {/* Books This Month */}
            <div className="bg-secondary-container text-on-secondary-container p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
              <span
                className="material-symbols-outlined absolute -right-4 -bottom-4 text-on-secondary-container/10 text-[120px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                history_edu
              </span>
              <p className="text-on-secondary-container/60 text-xs font-semibold uppercase tracking-wider mb-2">
                This Month
              </p>
              <h2 className="font-newsreader text-6xl font-bold">0</h2>
              <p className="text-on-secondary-container/70 text-sm mt-6">
                Books borrowed this month.
              </p>
            </div>

            {/* Account Details */}
            <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 book-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-newsreader text-xl font-semibold text-primary">
                  Account Details
                </h3>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                  Active Member
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">
                    Display Name
                  </p>
                  <p className="font-semibold text-on-surface">{user.name}</p>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-semibold text-on-surface text-sm truncate">
                    {user.email}
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">
                    Member Since
                  </p>
                  <p className="font-semibold text-on-surface text-sm">
                    {joinedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="font-newsreader text-2xl font-semibold text-primary mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/books"
              className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">
                  search
                </span>
              </div>
              <div>
                <p className="font-semibold text-on-surface">Browse Books</p>
                <p className="text-xs text-slate-400">Explore the catalog</p>
              </div>
            </Link>
            <Link
              href="/profile/update"
              className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-white">
                  edit
                </span>
              </div>
              <div>
                <p className="font-semibold text-on-surface">Edit Profile</p>
                <p className="text-xs text-slate-400">Update your info</p>
              </div>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-white border border-slate-100 rounded-2xl p-6 flex items-center gap-4 hover:shadow-lg hover:-translate-y-1 transition-all group text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center group-hover:bg-error transition-colors">
                <span className="material-symbols-outlined text-error group-hover:text-white">
                  logout
                </span>
              </div>
              <div>
                <p className="font-semibold text-on-surface">Sign Out</p>
                <p className="text-xs text-slate-400">Log out of NextRead</p>
              </div>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
