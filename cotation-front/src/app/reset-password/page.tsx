import type { Metadata } from "next"
import { ResetPasswordForm } from "@/components/reset-password-form"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Quotation Manager - Reinitialiser le mot de passe",
  description: "Reinitialiser votre mot de passe Quotation Manager",
}

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-svh w-full items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-[380px] flex flex-col gap-10">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-xl overflow-hidden ring-1 ring-border">
            <Image
              src="/images/logo.jpg"
              alt="Quotation Manager Logo"
              width={48}
              height={48}
              priority
              className="size-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-[17px] font-semibold text-foreground tracking-tight">
              Quotation Manager
            </h1>
            <p className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase mt-0.5">
              Enterprise Platform
            </p>
          </div>
        </div>

        {/* Form */}
        <ResetPasswordForm />

        {/* Back to login */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <ArrowLeft className="size-[14px] transition-transform duration-200 group-hover:-translate-x-0.5" />
            Retour a la connexion
          </Link>
        </div>
      </div>
    </main>
  )
}
