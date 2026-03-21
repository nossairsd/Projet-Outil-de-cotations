'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import Image from "next/image"
import { LoginForm } from "@/components/login-form"
import { LoginBranding } from "@/components/login-branding"

export default function LoginPage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    // ← ATTENDRE QUE LE CHARGEMENT SOIT TERMINÉ AVANT DE REDIRIGER
    if (!isLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isLoading, router]);

  // ← AFFICHER UN LOADER PENDANT LA VÉRIFICATION
  if (isLoading) {
    return (
      <div className="flex min-h-svh w-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
          <p className="text-sm text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  // ← NE PAS RENDRE LA PAGE SI DÉJÀ CONNECTÉ (évite le flash)
  if (user) {
    return null;
  }

  return (
    <main className="flex min-h-svh w-full">
      <LoginBranding />

      <div className="flex w-full flex-col items-center justify-center bg-background lg:w-[45%]">
        <div className="flex w-full flex-col items-center justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
          <div className="mb-12 flex items-center gap-3 lg:hidden">
            <div className="flex size-11 items-center justify-center rounded-xl overflow-hidden ring-1 ring-border">
              <Image
                src="/images/logo.jpg"
                alt="Quotation Manager Logo"
                width={44}
                height={44}
                priority
                className="size-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-[17px] font-semibold text-foreground tracking-tight">
                Quotation Manager
              </h1>
              <p className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Enterprise Platform
              </p>
            </div>
          </div>

          <div className="w-full max-w-[380px]">
            <LoginForm />
          </div>
        </div>

        <div className="hidden lg:flex w-full items-center justify-center border-t border-border px-14 py-4">
          <p className="text-[11px] text-muted-foreground">
            {"Besoin d'aide ? Contactez "}
            <a href="mailto:support@quotationmanager.com" className="font-medium text-foreground hover:text-accent transition-colors duration-200">
              support@quotationmanager.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}