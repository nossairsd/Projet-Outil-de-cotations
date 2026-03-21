"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { User, UserRole, UserStatus } from "@/types"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Calendar,
  Shield,
  UserCheck,
  UserX,
  Edit,
  User as UserIcon,
  Building,
  Hash
} from "lucide-react"
import { cn } from "@/lib/utils"

interface UserDetailsModalProps {
  user: User | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onEdit: (user: User) => void
  onToggleStatus: (user: User) => void
}

const roleColors: Record<UserRole, string> = {
  ADMIN: "bg-red-500/10 text-red-600 border-red-500/20",
  RESPONSABLE: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  VALIDATEUR: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  DEMANDEUR: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
}

const roleGradients: Record<UserRole, string> = {
  ADMIN: "from-red-500 to-rose-600",
  RESPONSABLE: "from-purple-500 to-violet-600",
  VALIDATEUR: "from-blue-500 to-cyan-600",
  DEMANDEUR: "from-emerald-500 to-teal-600",
}

const roleLabels: Record<UserRole, string> = {
  ADMIN: "Administrateur",
  RESPONSABLE: "Responsable",
  VALIDATEUR: "Validateur",
  DEMANDEUR: "Demandeur",
}

const statusColors: Record<UserStatus, string> = {
  ACTIVE: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  INACTIVE: "bg-gray-500/10 text-gray-600 border-gray-500/20",
  PENDING: "bg-amber-500/10 text-amber-600 border-amber-500/20",
}

const statusLabels: Record<UserStatus, string> = {
  ACTIVE: "Actif",
  INACTIVE: "Inactif",
  PENDING: "En attente",
}

function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date)
}

export function UserDetailsModal({
  user,
  open,
  onOpenChange,
  onEdit,
  onToggleStatus,
}: UserDetailsModalProps) {
  if (!user) return null

  const initials = getInitials(user.firstName, user.lastName)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 gap-0 overflow-hidden rounded-2xl max-h-[85vh]">
        {/* Header compact */}
        <div className={cn(
          "relative h-20 bg-gradient-to-br",
          roleGradients[user.role]
        )}>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
          
          {/* Initiales badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
            <Hash className="h-3 w-3 text-white/80" />
            <span className="text-xs font-bold text-white">{initials}</span>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center -mt-10 relative z-10">
          <div className="relative">
            <Avatar className="h-20 w-20 border-4 border-card shadow-xl">
              <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
              <AvatarFallback className={cn(
                "bg-gradient-to-br text-white text-2xl font-bold",
                roleGradients[user.role]
              )}>
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className={cn(
              "absolute bottom-0 right-0 h-5 w-5 rounded-full border-3 border-card",
              user.status === "ACTIVE" ? "bg-emerald-500" : user.status === "PENDING" ? "bg-amber-500" : "bg-gray-400"
            )} />
          </div>
        </div>

        <DialogHeader className="px-5 pt-3 pb-2 text-center">
          <DialogTitle className="text-xl font-bold tracking-tight">
            {user.firstName} {user.lastName}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            {user.fonction} • {user.region}
          </DialogDescription>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Badge variant="outline" className={cn("text-xs font-medium", roleColors[user.role])}>
              <Shield className="h-3 w-3 mr-1" />
              {roleLabels[user.role]}
            </Badge>
            <Badge variant="outline" className={cn("text-xs font-medium", statusColors[user.status])}>
              {statusLabels[user.status]}
            </Badge>
          </div>
        </DialogHeader>

        {/* Contenu scrollable */}
        <ScrollArea className="px-5 py-2 max-h-[45vh]">
          <div className="space-y-4">
            
            {/* Info rapide - ligne unique */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 border border-border/50">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br text-white text-xs font-bold",
                  roleGradients[user.role]
                )}>
                  {initials}
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">Initiales</p>
                  <p className="text-sm font-semibold">{initials}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
                  <Calendar className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">Créé le</p>
                  <p className="text-sm font-semibold">{formatDate(user.createdAt)}</p>
                </div>
              </div>
            </div>

            {/* Contact - format compact */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Contact
              </h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Mail className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-muted-foreground">Email</p>
                    <p className="text-sm font-medium truncate">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/30 border border-border/50">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                    <Phone className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-muted-foreground">Téléphone</p>
                    <p className="text-sm font-medium">{user.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professionnel - 2 colonnes */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Professionnel
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50">
                  <MapPin className="h-3.5 w-3.5 text-violet-500" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground">Région</p>
                    <p className="text-xs font-medium truncate">{user.region}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50">
                  <Briefcase className="h-3.5 w-3.5 text-rose-500" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground">Fonction</p>
                    <p className="text-xs font-medium truncate">{user.fonction}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hiérarchie - format compact */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Hiérarchie
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50">
                  <UserIcon className="h-3.5 w-3.5 text-indigo-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-muted-foreground">Manager</p>
                    <p className="text-xs font-medium truncate">{user.managerEmail || "Non assigné"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30 border border-border/50">
                  <Building className="h-3.5 w-3.5 text-slate-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-muted-foreground">Directeur</p>
                    <p className="text-xs font-medium truncate">{user.directorEmail || "Non assigné"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Actions Footer */}
        <div className="px-5 py-3 bg-muted/30 border-t border-border/50 flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              onOpenChange(false)
              onEdit(user)
            }}
            className="flex-1 h-9 text-sm"
          >
            <Edit className="h-3.5 w-3.5 mr-1.5" />
            Modifier
          </Button>
          <Button
            size="sm"
            variant={user.status === "ACTIVE" ? "destructive" : "default"}
            onClick={() => {
              onToggleStatus(user)
              onOpenChange(false)
            }}
            className={cn(
              "flex-1 h-9 text-sm",
              user.status !== "ACTIVE" && "bg-emerald-600 hover:bg-emerald-700"
            )}
          >
            {user.status === "ACTIVE" ? (
              <>
                <UserX className="h-3.5 w-3.5 mr-1.5" />
                Désactiver
              </>
            ) : (
              <>
                <UserCheck className="h-3.5 w-3.5 mr-1.5" />
                Activer
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}