"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    setLoading(true);
    try {
      const result = await signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
        image: form.photoUrl || undefined,
      });
      if (result?.error) {
        toast.error(result.error.message || "Registration failed.");
      } else {
        toast.success("Account created! Please log in.");
        router.push("/login");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn.social({ provider: "google", callbackURL: "/" });
    } catch {
      toast.error("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="bg-white scholarly-card-shadow rounded-3xl p-8 md:p-10 border border-surface-container-high animate__animated animate__fadeInUp">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-white text-2xl">
            person_add
          </span>
        </div>
        <h1 className="font-newsreader text-4xl font-semibold text-primary mb-2">
          Create Account
        </h1>
        <p className="text-slate-500 text-sm">
          Join thousands of readers on NextRead.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-on-surface ml-1">
            Full Name <span className="text-error">*</span>
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
              placeholder="Your full name"
              className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-on-surface ml-1">
            Email Address <span className="text-error">*</span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
              mail
            </span>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
              required
            />
          </div>
        </div>

        {/* Photo URL */}
        <div className="space-y-2">
          <label htmlFor="photoUrl" className="block text-sm font-semibold text-on-surface ml-1">
            Photo URL{" "}
            <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
              image
            </span>
            <input
              id="photoUrl"
              name="photoUrl"
              type="url"
              value={form.photoUrl}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
              className="w-full pl-12 pr-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-semibold text-on-surface ml-1">
            Password <span className="text-error">*</span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
              lock
            </span>
            <input
              id="password"
              name="password"
              type={showPass ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              placeholder="Min. 8 characters"
              className="w-full pl-12 pr-12 py-3.5 bg-surface-container-low border border-outline-variant rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
              required
              minLength={8}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-lg">
                {showPass ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
          {form.password && form.password.length < 8 && (
            <p className="text-xs text-error ml-1">
              Password must be at least 8 characters.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-secondary text-white rounded-xl font-semibold text-base scholarly-card-shadow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Creating account...
            </>
          ) : (
            <>
              Register
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </>
          )}
        </button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-4 text-outline font-semibold tracking-widest uppercase">
              Or continue with
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-3.5 border border-outline-variant text-on-surface rounded-xl font-medium text-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-slate-500 text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-secondary font-semibold hover:underline decoration-secondary/30 underline-offset-4"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
