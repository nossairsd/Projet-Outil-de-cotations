"use client"

import { useState, type FormEvent } from "react"
import { Loader2, Mail, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ResetPasswordForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email) {
      setError("L'adresse e-mail est requise")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Veuillez entrer une adresse e-mail valide")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch {
      setError("Une erreur est survenue. Veuillez reessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <div
          className="flex size-16 items-center justify-center rounded-2xl"
          style={{ background: "rgba(14,165,233,0.1)" }}
        >
          <CheckCircle2 className="size-8 text-accent" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-semibold text-foreground tracking-tight">
            E-mail envoye
          </h2>
          <p className="text-[14px] text-muted-foreground leading-relaxed max-w-xs">
            {"Si un compte existe avec l'adresse "}
            <span className="font-semibold text-foreground">{email}</span>
            {", vous recevrez un lien de reinitialisation sous quelques minutes."}
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-2 h-11 px-6 text-[13px] font-medium border-border hover:border-muted-foreground/25 transition-all duration-200"
          onClick={() => {
            setIsSubmitted(false)
            setEmail("")
          }}
        >
          Envoyer a nouveau
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-[22px] font-semibold text-foreground tracking-tight">
          Reinitialiser le mot de passe
        </h2>
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          Entrez votre adresse e-mail et nous vous enverrons un lien pour reinitialiser votre mot de passe.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="reset-email" className="text-[13px] font-medium text-foreground">
            Adresse e-mail
          </Label>
          <div className="relative group">
            <div className="absolute left-0 top-0 flex h-full w-11 items-center justify-center pointer-events-none">
              <Mail className="size-[16px] text-muted-foreground group-focus-within:text-accent transition-colors duration-200" />
            </div>
            <Input
              id="reset-email"
              type="email"
              placeholder="nom@entreprise.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError("")
              }}
              className={`h-12 pl-11 text-[14px] bg-secondary/50 border-border hover:border-muted-foreground/25 focus-visible:bg-card transition-all duration-200 ${error ? "border-destructive hover:border-destructive" : ""}`}
              autoComplete="email"
              autoFocus
              aria-invalid={!!error}
              aria-describedby={error ? "reset-email-error" : undefined}
            />
          </div>
          {error && (
            <p id="reset-email-error" className="text-[12px] text-destructive font-medium" role="alert">
              {error}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="h-12 w-full text-[14px] font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2.5">
              <Loader2 className="size-[18px] animate-spin" />
              <span>Envoi en cours...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2.5">
              <span>Envoyer le lien</span>
              <ArrowRight className="size-[16px] transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          )}
        </Button>
      </form>
    </div>
  )
}
