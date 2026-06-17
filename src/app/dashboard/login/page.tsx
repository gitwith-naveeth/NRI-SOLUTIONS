"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldAlert, ArrowRight, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Mock Authentication check
    if (email === "demo@nri.com" && password === "password") {
      setTimeout(() => {
        localStorage.setItem("nri_session", "true");
        localStorage.setItem("nri_user", JSON.stringify({ name: "Rajesh Sharma", email }));
        router.push("/dashboard");
      }, 800);
    } else {
      setTimeout(() => {
        setError("Invalid email or password. Use demo@nri.com / password");
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950 relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float"></div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <Link href="/" className="inline-block mb-4">
            <span className="text-3xl font-extrabold tracking-tight">
              <span className="text-gold-500">NRI</span> <span className="text-white">Solutions</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Client Portal Login
          </h2>
          <p className="text-navy-300 text-xs mt-2">
            Secure on-ground tracking & document chamber
          </p>
        </div>

        <div className="bg-navy-900 border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
          {error && (
            <div className="flex items-center space-x-2 bg-red-500/10 border border-red-500/30 text-red-400 p-3.5 rounded-xl text-xs font-semibold">
              <ShieldAlert className="h-4 w-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-bold text-navy-200 uppercase tracking-wider">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@nri.com"
                className="bg-navy-950 border-white/10 text-white rounded-xl placeholder:text-gray-600 focus-visible:ring-gold-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-xs font-bold text-navy-200 uppercase tracking-wider">
                  Password
                </Label>
                <Link href="#" className="text-xs text-gold-500 hover:text-gold-400 font-medium">
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-navy-950 border-white/10 text-white rounded-xl placeholder:text-gray-600 focus-visible:ring-gold-500"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-4 rounded-xl shadow-lg hover:shadow-gold-500/10 transition-all duration-200 text-sm flex items-center justify-center"
            >
              {loading ? "Signing in..." : "Access Dashboard"}
              {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>

          {/* Demo Credentials block */}
          <div className="bg-navy-950 border border-white/5 rounded-2xl p-4 flex items-start space-x-3 text-xs text-navy-300">
            <Lock className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-1">Demo Credentials</span>
              Email: <span className="text-gold-300 font-mono">demo@nri.com</span> <br />
              Password: <span className="text-gold-300 font-mono">password</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-navy-400 hover:text-gold-500 transition-colors">
            ← Back to main website
          </Link>
        </div>
      </div>
    </div>
  );
}
