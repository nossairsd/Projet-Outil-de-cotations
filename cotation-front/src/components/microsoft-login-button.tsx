"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MicrosoftIcon } from "@/components/microsoft-icon"

export function MicrosoftLoginButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleMicrosoftLogin = async () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <Button
      type="button"
      variant="outline"
      className="h-12 w-full gap-3 border-border bg-card text-foreground hover:bg-secondary hover:border-muted-foreground/25 transition-all duration-200 shadow-sm"
      onClick={handleMicrosoftLogin}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="size-[18px] animate-spin" />
      ) : (
        <MicrosoftIcon className="size-5" />
      )}
      <span className="text-[14px] font-medium">
        {"Continuer avec Microsoft"}
      </span>
    </Button>
  )
}
