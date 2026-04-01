"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuthStore } from "@/domains/user/store/auth.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/core/utils/cn";

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading, error, clearError } = useAuthStore();

  const [email, setEmail] = useState("customer@example.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    clearError();
    await login({ email, password });
    router.push("/dashboard");
  }

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2Bold" color="text.primary">Welcome back</Typography>
        <Typography variant="b2Regular" color="text.hint" className="mt-1">
          Sign in to your RedFox account to continue.
        </Typography>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-lg bg-error-100 border border-error-300 px-4 py-3 type-b2-reg text-error-600">
            {error}
          </div>
        )}

        <div className="space-y-1.5">
          <Typography variant="b2Semi" color="text.secondary" as="label" htmlFor="email">
            Email address
          </Typography>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="h-11"
          />
        </div>

        <div className="space-y-1.5">
          <Typography variant="b2Semi" color="text.secondary" as="label" htmlFor="password">
            Password
          </Typography>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="h-11 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full h-11 rounded-xl bg-brand-600 hover:bg-brand-700 text-white-100 type-b2-semi",
            isLoading && "opacity-70"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in…
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>

      <Typography variant="b2Regular" color="text.hint" className="text-center">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="type-b2-semi text-brand-600 hover:underline">
          Create one
        </Link>
      </Typography>

      {/* Dev hint */}
      <div className="rounded-xl bg-neutral-100 p-4 space-y-1">
        <Typography variant="b3Semi" color="text.secondary">Mock credentials</Typography>
        <Typography variant="b3Regular" color="text.hint">admin@redfoxcourier.com / any 6+ char password</Typography>
        <Typography variant="b3Regular" color="text.hint">operator@redfoxcourier.com / any 6+ char password</Typography>
        <Typography variant="b3Regular" color="text.hint">customer@example.com / any 6+ char password</Typography>
      </div>
    </div>
  );
}
