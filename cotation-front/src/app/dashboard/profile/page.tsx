"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Shield,
  Camera,
  Save,
  Loader2,
  Calendar,
  Edit3,
  Lock
} from "lucide-react"
import { cn } from "@/lib/utils"

// Mock current user - replace with real auth context
const currentUser = {
  id: "1",
  firstName: "Jean",
  lastName: "Dupont",
  email: "jean.dupont@entreprise.com",
  phone: "+33 6 12 34 56 78",
  region: "Île-de-France",
  fonction: "Directeur Commercial",
  role: "ADMIN" as const,
  status: "ACTIVE" as const,
  createdAt: new Date("2024-01-15"),
  avatar: undefined,
}

const roleLabels = {
  ADMIN: "Administrateur",
  RESPONSABLE: "Responsable",
  VALIDATEUR: "Validateur",
  DEMANDEUR: "Demandeur",
}

const roleColors = {
  ADMIN: "bg-red-500/10 text-red-500 border-red-500/20",
  RESPONSABLE: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  VALIDATEUR: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  DEMANDEUR: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
}

function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date)
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    phone: currentUser.phone,
    region: currentUser.region,
    fonction: currentUser.fonction,
  })

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSaving(false)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      phone: currentUser.phone,
      region: currentUser.region,
      fonction: currentUser.fonction,
    })
    setIsEditing(false)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Mon Profil
        </h1>
        <p className="text-muted-foreground mt-1">
          Gérez vos informations personnelles et vos paramètres de compte.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
        {/* Header Banner */}
        <div className="relative h-32 bg-gradient-to-br from-primary via-primary/80 to-accent/60">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          
          {/* Edit Button */}
          <div className="absolute top-4 right-4">
            {!isEditing ? (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsEditing(true)}
                className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Modifier
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCancel}
                  disabled={isSaving}
                  className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                >
                  Annuler
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="bg-white hover:bg-white/90 text-primary"
                >
                  {isSaving ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4 mr-2" />
                  )}
                  Enregistrer
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Avatar and Basic Info */}
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-card shadow-xl">
                <AvatarImage src={currentUser.avatar} />
                <AvatarFallback className="bg-accent text-accent-foreground text-2xl font-semibold">
                  {getInitials(currentUser.firstName, currentUser.lastName)}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <div className="flex-1 pt-2 sm:pt-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {currentUser.firstName} {currentUser.lastName}
                  </h2>
                  <p className="text-sm text-muted-foreground">{currentUser.fonction}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={cn("font-medium", roleColors[currentUser.role])}>
                    <Shield className="h-3 w-3 mr-1" />
                    {roleLabels[currentUser.role]}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6 bg-border/50" />

          {/* Profile Form */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                Prénom
              </Label>
              {isEditing ? (
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-background"
                />
              ) : (
                <p className="text-sm text-foreground py-2 px-3 rounded-md bg-muted/50">
                  {formData.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                Nom
              </Label>
              {isEditing ? (
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="bg-background"
                />
              ) : (
                <p className="text-sm text-foreground py-2 px-3 rounded-md bg-muted/50">
                  {formData.lastName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                Email
              </Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background"
                />
              ) : (
                <p className="text-sm text-foreground py-2 px-3 rounded-md bg-muted/50">
                  {formData.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                Téléphone
              </Label>
              {isEditing ? (
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background"
                />
              ) : (
                <p className="text-sm text-foreground py-2 px-3 rounded-md bg-muted/50">
                  {formData.phone}
                </p>
              )}
            </div>

            {/* Region */}
            <div className="space-y-2">
              <Label htmlFor="region" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Région
              </Label>
              {isEditing ? (
                <Input
                  id="region"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="bg-background"
                />
              ) : (
                <p className="text-sm text-foreground py-2 px-3 rounded-md bg-muted/50">
                  {formData.region}
                </p>
              )}
            </div>

            {/* Fonction */}
            <div className="space-y-2">
              <Label htmlFor="fonction" className="text-sm font-medium flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                Fonction
              </Label>
              {isEditing ? (
                <Input
                  id="fonction"
                  value={formData.fonction}
                  onChange={(e) => setFormData({ ...formData, fonction: e.target.value })}
                  className="bg-background"
                />
              ) : (
                <p className="text-sm text-foreground py-2 px-3 rounded-md bg-muted/50">
                  {formData.fonction}
                </p>
              )}
            </div>
          </div>

          {/* Account Info */}
          <Separator className="my-6 bg-border/50" />
          
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Membre depuis</p>
                <p className="text-xs text-muted-foreground">{formatDate(currentUser.createdAt)}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Lock className="h-4 w-4" />
              Changer mot de passe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
