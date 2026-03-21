"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UserRole } from "@/types"
import { User, Mail, Phone, MapPin, Briefcase, Shield, Loader2 } from "lucide-react"

interface AddUserModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: UserFormData) => void
}

export interface UserFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  region: string
  fonction: string
  role: UserRole
}

const initialFormData: UserFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  region: "",
  fonction: "",
  role: "DEMANDEUR",
}

export function AddUserModal({ open, onOpenChange, onSubmit }: AddUserModalProps) {
  const [formData, setFormData] = useState<UserFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof UserFormData, string>>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof UserFormData, string>> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis"
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Le téléphone est requis"
    }
    if (!formData.region.trim()) {
      newErrors.region = "La région est requise"
    }
    if (!formData.fonction.trim()) {
      newErrors.fonction = "La fonction est requise"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    onSubmit(formData)
    setFormData(initialFormData)
    setErrors({})
    setIsSubmitting(false)
    onOpenChange(false)
  }

  const handleChange = (field: keyof UserFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent">
          <DialogTitle className="text-xl font-semibold flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <User className="h-5 w-5 text-accent" />
            </div>
            Ajouter un utilisateur
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Remplissez les informations pour créer un nouveau compte utilisateur.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium">
                Prénom
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="firstName"
                  placeholder="Jean"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className={`pl-10 ${errors.firstName ? "border-red-500 focus:ring-red-500" : ""}`}
                />
              </div>
              {errors.firstName && (
                <p className="text-xs text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium">
                Nom
              </Label>
              <Input
                id="lastName"
                placeholder="Dupont"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className={errors.lastName ? "border-red-500 focus:ring-red-500" : ""}
              />
              {errors.lastName && (
                <p className="text-xs text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Adresse email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="jean.dupont@entreprise.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`pl-10 ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone & Region */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Téléphone
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="phone"
                  placeholder="+33 6 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`pl-10 ${errors.phone ? "border-red-500 focus:ring-red-500" : ""}`}
                />
              </div>
              {errors.phone && (
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="region" className="text-sm font-medium">
                Région
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="region"
                  placeholder="Île-de-France"
                  value={formData.region}
                  onChange={(e) => handleChange("region", e.target.value)}
                  className={`pl-10 ${errors.region ? "border-red-500 focus:ring-red-500" : ""}`}
                />
              </div>
              {errors.region && (
                <p className="text-xs text-red-500">{errors.region}</p>
              )}
            </div>
          </div>

          {/* Fonction & Role */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fonction" className="text-sm font-medium">
                Fonction
              </Label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="fonction"
                  placeholder="Chef de projet"
                  value={formData.fonction}
                  onChange={(e) => handleChange("fonction", e.target.value)}
                  className={`pl-10 ${errors.fonction ? "border-red-500 focus:ring-red-500" : ""}`}
                />
              </div>
              {errors.fonction && (
                <p className="text-xs text-red-500">{errors.fonction}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium">
                Rôle
              </Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleChange("role", value)}
              >
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Sélectionner un rôle" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="RESPONSABLE">Responsable</SelectItem>
                  <SelectItem value="VALIDATEUR">Validateur</SelectItem>
                  <SelectItem value="DEMANDEUR">Demandeur</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>

        <DialogFooter className="px-6 py-4 bg-muted/30 border-t border-border/50">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Création...
              </>
            ) : (
              "Créer l'utilisateur"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
