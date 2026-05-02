"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending, update: updateSession } = useSession();
  const [form, setForm] = useState({ name: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
      return;
    }
    if (session?.user) {
      setForm({
        name: session.user.name || "",
        image: session.user.image || "",
      });
      setPreview(session.user.image || "");
    }
  }, [session, isPending, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "image") {
      setPreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }
    setLoading(true);
    try {
      // BetterAuth update user
      const res = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, image: form.image }),
      });
      if (res.ok) {
        await updateSession?.();
        toast.success("Profile updated successfully!");
        router.push("/profile");
      } else {
        toast.error("Failed to update profile. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          <div className="bg-white scholarly-card-shadow rounded-3xl p-8 md:p-10 border border-surface-container-high animate__animated animate__fadeInUp">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/profile"
                className="w-10 h-10 rounded-xl border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-slate-600">
                  arrow_back
                </span>
              </Link>
              <div>
                <h1 className="font-newsreader text-3xl font-semibold text-primary">
                  Update Profile
                </h1>
                <p className="text-slate-500 text-sm">
                  Edit your name and profile photo.
                </p>
              </div>
            </div>

            {/* Avatar Preview */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {preview ? (
                  <div className="relative w-28 h-28">
                    <Image
                      src={preview}
                      alt="Profile preview"
                      fill
                      className="rounded-full object-cover border-4 border-surface-container"
                      onError={() => setPreview("")}
                    />
                  </div>
                ) : (
                  <div className="w-28 h-28 rounded-full bg-primary-container border-4 border-surface-container flex items-center justify-center text-white text-5xl font-newsreader font-semibold">
                    {form.name?.charAt(0).toUpperCase() || "?"}
                  </div>
                )}
                <div className="absolute bottom-0 right-0 bg-secondary text-white p-2 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-[16px]">
                    photo_camera
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-on-surface ml-1"
                >
                  Display Name <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
                    person
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your display name"
                    className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
                    required
                  />
                </div>
              </div>

              {/* Photo URL */}
              <div className="space-y-2">
                <label
                  htmlFor="image"
                  className="block text-sm font-semibold text-on-surface ml-1"
                >
                  Photo URL{" "}
                  <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
                    image
                  </span>
                  <input
                    id="image"
                    name="image"
                    type="url"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
                  />
                </div>
                <p className="text-xs text-slate-400 ml-1">
                  Enter a direct image URL to update your profile photo.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-secondary text-white rounded-xl font-semibold text-base scholarly-card-shadow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-lg">
                      save
                    </span>
                    Update Information
                  </>
                )}
              </button>

              <Link
                href="/profile"
                className="w-full py-3 border border-outline-variant text-slate-600 rounded-xl font-medium text-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
