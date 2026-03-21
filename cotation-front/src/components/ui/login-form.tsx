"use client";

import { useState , type FormEvent} from "react";
import Link from "next/link";
import {Loader2, Mail , ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import  {Label} from "@/components/ui/label";
import {Checkbox} from "@/components/ui/checkbox";
import {PasswordInput} from "@/components/password-input"
import {MicrosoftLoginButton} from "@/components/microsoft-login-button";
import { set } from "zod";


export function LoginForm(){
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{email?:string, password?:string}>({});

    const validateForm = () => {
        const newErrors : {email?:string, password?:string} = {};

        if(!email){
            newErrors.email = "L'adresse email est requise.";
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            newErrors.email = "L'adresse email n'est pas valide.";
        }

        if(!password){
            newErrors.password = "Le mot de passe est requis.";
        }else if(password.length < 8){
            newErrors.password = "Le mot de passe doit contenir au moins 8 caractères.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        if(!validateForm())
            return setIsLoading(true);
        try{
            await new Promise((resolve) => setTimeout(resolve, 1500))
        }catch(error){
            console.error("Erreur lors de la connexion:", error);
        }finally{
            setIsLoading(false);
        }
    }


    return (
    <div className="flex w-full flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[26px] font-semibold tracking-tight text-foreground">
          Bienvenue
        </h2>
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          Connectez-vous pour acceder a votre espace de gestion
        </p>
      </div>

      {/* Microsoft SSO */}
      <MicrosoftLoginButton />

      {/* Divider */}
      <div className="relative flex items-center">
        <div className="flex-1 border-t border-border" />
        <span className="mx-4 text-[11px] text-muted-foreground uppercase tracking-[0.15em] font-medium select-none">
          ou avec votre e-mail
        </span>
        <div className="flex-1 border-t border-border" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-[13px] font-medium text-foreground">
            Adresse e-mail
          </Label>
          <div className="relative group">
            <div className="absolute left-0 top-0 flex h-full w-11 items-center justify-center pointer-events-none">
              <Mail className="size-[16px] text-muted-foreground group-focus-within:text-accent transition-colors duration-200" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="nom@entreprise.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
              }}
              className={`h-12 pl-11 text-[14px] bg-secondary/50 border-border hover:border-muted-foreground/25 focus-visible:bg-card transition-all duration-200 ${errors.email ? "border-destructive hover:border-destructive" : ""}`}
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </div>
          {errors.email && (
            <p id="email-error" className="text-[12px] text-destructive font-medium" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-[13px] font-medium text-foreground">
              Mot de passe
            </Label>
            <Link
              href="/reset-password"
              className="text-[12px] font-medium text-accent hover:text-accent/80 transition-colors duration-200"
            >
              Mot de passe oublie ?
            </Link>
          </div>
          <PasswordInput
            id="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
            }}
            error={errors.password}
            label=""
            autoComplete="current-password"
            aria-invalid={!!errors.password}
          />
        </div>

        {/* Remember me */}
        <div className="flex items-center gap-2.5">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(checked: boolean | "indeterminate") =>
            setRememberMe(checked === true)
            }
            className="size-[18px] rounded"
          />
          <Label
            htmlFor="remember"
            className="text-[13px] text-muted-foreground cursor-pointer font-normal select-none"
          >
            Rester connecte sur cet appareil
          </Label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-12 w-full text-[14px] font-semibold tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2.5">
              <Loader2 className="size-[18px] animate-spin" />
              <span>Connexion en cours...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2.5">
              <span>Se connecter</span>
              <ArrowRight className="size-[16px] transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          )}
        </Button>
      </form>

      {/* Footer */}
      <div className="flex flex-col gap-4 pt-2">
        <div className="h-px bg-border" />
        <p className="text-center text-[11px] text-muted-foreground leading-relaxed">
          {"En vous connectant, vous acceptez nos "}
          <Link
            href="/terms"
            className="font-medium text-foreground hover:text-accent transition-colors duration-200 underline underline-offset-[3px] decoration-border hover:decoration-accent"
          >
            {"Conditions d'utilisation"}
          </Link>
          {" et notre "}
          <Link
            href="/privacy"
            className="font-medium text-foreground hover:text-accent transition-colors duration-200 underline underline-offset-[3px] decoration-border hover:decoration-accent"
          >
            Politique de confidentialite
          </Link>
        </p>
      </div>
    </div>
  )
}
