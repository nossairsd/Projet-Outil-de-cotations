"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface PasswordInputProps extends React.ComponentProps<"input"> {
  label?: string
  error?: string
}

export function PasswordInput({
  label = "Mot de passe",
  error,
  className,
  id,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label htmlFor={id} className="text-[13px] font-medium text-foreground">
          {label}
        </Label>
      )}
      <div className="relative group">
        <div className="absolute left-0 top-0 flex h-full w-11 items-center justify-center pointer-events-none">
          <Lock className="size-[16px] text-muted-foreground group-focus-within:text-accent transition-colors duration-200" />
        </div>
        <Input
          id={id}
          type={showPassword ? "text" : "password"}
          className={cn(
            "h-12 pl-11 pr-11 text-[14px] bg-secondary/50 border-border hover:border-muted-foreground/25 focus-visible:bg-card transition-all duration-200",
            error && "border-destructive hover:border-destructive",
            className
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-0 top-0 flex h-full w-11 items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
        >
          {showPassword ? (
            <EyeOff className="size-[16px]" />
          ) : (
            <Eye className="size-[16px]" />
          )}
        </button>
      </div>
      {error && (
        <p className="text-[12px] text-destructive font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
