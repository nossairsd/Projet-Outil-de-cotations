"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils"
import { AlertTriangle, UserCheck, UserX, Trash2, Loader2 } from "lucide-react"
import { useState } from "react"

type ConfirmationType = "activate" | "deactivate" | "delete"

interface ConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  type: ConfirmationType
  userName: string
  onConfirm: () => void | Promise<void>
}

const config: Record<ConfirmationType, {
  title: string
  description: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  confirmText: string
  confirmClass: string
}> = {
  activate: {
    title: "Activer l'utilisateur",
    description: "Êtes-vous sûr de vouloir activer le compte de",
    icon: UserCheck,
    iconBg: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-500",
    confirmText: "Activer",
    confirmClass: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-0 shadow-lg shadow-emerald-500/20",
  },
  deactivate: {
    title: "Désactiver l'utilisateur",
    description: "Êtes-vous sûr de vouloir désactiver le compte de",
    icon: UserX,
    iconBg: "bg-gradient-to-br from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-500",
    confirmText: "Désactiver",
    confirmClass: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-lg shadow-amber-500/20",
  },
  delete: {
    title: "Supprimer l'utilisateur",
    description: "Êtes-vous sûr de vouloir supprimer définitivement le compte de",
    icon: Trash2,
    iconBg: "bg-gradient-to-br from-red-500/20 to-red-600/10",
    iconColor: "text-red-500",
    confirmText: "Supprimer",
    confirmClass: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg shadow-red-500/20",
  },
}

export function ConfirmationDialog({
  open,
  onOpenChange,
  type,
  userName,
  onConfirm,
}: ConfirmationDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { title, description, icon: Icon, iconBg, iconColor, confirmText, confirmClass } = config[type]

  const handleConfirm = async () => {
    setIsLoading(true)
    try {
      await onConfirm()
    } finally {
      setIsLoading(false)
      onOpenChange(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-[420px] p-0 gap-0 overflow-hidden border-border/50 shadow-2xl">
        {/* Header with gradient */}
        <div className="relative px-6 pt-8 pb-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-transparent to-transparent" />
          
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-accent/5 to-transparent blur-2xl" />
          
          <AlertDialogHeader className="relative space-y-4">
            {/* Icon */}
            <div className="flex justify-center">
              <div className={cn(
                "flex h-16 w-16 items-center justify-center rounded-2xl",
                iconBg
              )}>
                <Icon className={cn("h-8 w-8", iconColor)} />
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <AlertDialogTitle className="text-xl font-semibold text-foreground">
                {title}
              </AlertDialogTitle>
              <AlertDialogDescription className="text-sm text-muted-foreground leading-relaxed">
                {description}{" "}
                <span className="font-semibold text-foreground">{userName}</span> ?
                {type === "delete" && (
                  <span className="block mt-2 text-red-500/80 font-medium">
                    Cette action est irréversible.
                  </span>
                )}
              </AlertDialogDescription>
            </div>
          </AlertDialogHeader>
        </div>

        {/* Footer */}
        <AlertDialogFooter className="flex-row gap-3 px-6 py-4 bg-muted/30 border-t border-border/50 sm:justify-center">
          <AlertDialogCancel 
            disabled={isLoading}
            className="flex-1 sm:flex-none sm:min-w-[120px] border-border/50 hover:bg-muted/80"
          >
            Annuler
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={isLoading}
            className={cn("flex-1 sm:flex-none sm:min-w-[120px] transition-all duration-200", confirmClass)}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                En cours...
              </>
            ) : (
              <>
                <Icon className="h-4 w-4 mr-2" />
                {confirmText}
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
