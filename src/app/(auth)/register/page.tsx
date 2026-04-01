"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useAuthStore } from "@/domains/user/store/auth.store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
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
        <Typography variant="h2Bold" color="text.primary">Create your account</Typography>
        <Typography variant="b2Regular" color="text.hint" className="mt-1">
          Start shipping internationally in minutes.
        </Typography>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-lg bg-error-100 border border-error-300 px-4 py-3 type-b2-reg text-error-600">
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
            <Typography variant="b2Semi" color="text.secondary" as="label" htmlFor={field.name}>
              {field.label}
            </Typography>
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
            "w-full h-11 rounded-xl bg-brand-600 hover:bg-brand-700 text-white-100 type-b2-semi",
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

      <Typography variant="b2Regular" color="text.hint" className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="type-b2-semi text-brand-600 hover:underline">
          Sign in
        </Link>
      </Typography>
    </div>
  );
}
