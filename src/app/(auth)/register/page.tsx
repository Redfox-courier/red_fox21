"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useAuthStore } from "@/domains/user/store/auth.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/core/utils/cn";

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading, error, clearError } = useAuthStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    clearError();
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await register(form);
    router.push("/dashboard");
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
        <p className="mt-1 text-sm text-gray-500">
          Start shipping internationally in minutes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {[
          { name: "name", label: "Full name", type: "text", placeholder: "Rahul Mehta" },
          { name: "email", label: "Email address", type: "email", placeholder: "you@example.com" },
          { name: "password", label: "Password", type: "password", placeholder: "Min. 6 characters" },
          { name: "companyName", label: "Company name (optional)", type: "text", placeholder: "Mehta Exports" },
        ].map((field) => (
          <div key={field.name} className="space-y-1.5">
            <label htmlFor={field.name} className="text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <Input
              id={field.name}
              name={field.name}
              type={field.type}
              value={form[field.name as keyof typeof form]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.name !== "companyName"}
              className="h-11"
            />
          </div>
        ))}

        <Button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full h-11 rounded-xl bg-[#E84C14] hover:bg-[#d0430f] text-white font-semibold",
            isLoading && "opacity-70"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account…
            </>
          ) : (
            "Create account"
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[#E84C14] hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
