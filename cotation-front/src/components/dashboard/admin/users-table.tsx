"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Eye, 
  MoreHorizontal, 
  UserCheck, 
  UserX, 
  Edit,
  Trash2,
} from "lucide-react"
import { User, UserRole, UserStatus } from "@/types"
import { cn } from "@/lib/utils"
import { ConfirmationDialog } from "@/components/dashboard/admin/confirmation-dialog" // ← AJOUTER

interface UsersTableProps {
  users: User[]
  onViewDetails: (user: User) => void
  onToggleStatus: (user: User) => void
  onEdit: (user: User) => void
  onDelete: (user: User) => void
}

const roleColors: Record<UserRole, string> = {
  ADMIN: "bg-red-500/10 text-red-600 border-red-500/20",
  RESPONSABLE: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  VALIDATEUR: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  DEMANDEUR: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
}

const roleLabels: Record<UserRole, string> = {
  ADMIN: "Admin",
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

export function UsersTable({
  users,
  onViewDetails,
  onToggleStatus,
  onEdit,
  onDelete,
}: UsersTableProps) {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  
  // ← AJOUTER : États pour le modal de confirmation
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean
    type: "activate" | "deactivate" | "delete"
    user: User | null
  }>({
    open: false,
    type: "deactivate",
    user: null,
  })

  // ← AJOUTER : Handler pour ouvrir le modal
  const handleToggleStatusClick = (user: User) => {
    setConfirmDialog({
      open: true,
      type: user.status === "ACTIVE" ? "deactivate" : "activate",
      user: user,
    })
  }

  // ← AJOUTER : Handler pour confirmer l'action
  const handleConfirmToggle = async () => {
    if (confirmDialog.user) {
      await onToggleStatus(confirmDialog.user)
    }
  }

  // ← AJOUTER : Handler pour supprimer avec confirmation
  const handleDeleteClick = (user: User) => {
    setConfirmDialog({
      open: true,
      type: "delete",
      user: user,
    })
  }

  const handleConfirmDelete = async () => {
    if (confirmDialog.user) {
      await onDelete(confirmDialog.user)
    }
  }

  return (
    <>
      <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Nom & Prénom
                </TableHead>
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Téléphone
                </TableHead>
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Email
                </TableHead>
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Région
                </TableHead>
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Fonction
                </TableHead>
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Rôle
                </TableHead>
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Date création
                </TableHead>
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Statut
                </TableHead>
                <TableHead className="font-semibold text-foreground text-center whitespace-nowrap px-4">
                  Détails
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="h-32 text-center text-muted-foreground">
                    Aucun utilisateur trouvé
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow
                    key={user.id}
                    className={cn(
                      "border-border/30 transition-colors duration-200",
                      hoveredRow === user.id && "bg-muted/30"
                    )}
                    onMouseEnter={() => setHoveredRow(user.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    {/* Nom & Prénom */}
                    <TableCell className="text-center px-4">
                      <div className="flex items-center justify-center gap-3">
                        <Avatar className="h-9 w-9 border-2 border-border/50 flex-shrink-0">
                          <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                          <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xs font-semibold">
                            {getInitials(user.firstName, user.lastName)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-foreground whitespace-nowrap">
                          {user.firstName} {user.lastName}
                        </span>
                      </div>
                    </TableCell>

                    {/* Téléphone */}
                    <TableCell className="text-center text-muted-foreground px-4 whitespace-nowrap">
                      {user.phone}
                    </TableCell>

                    {/* Email */}
                    <TableCell className="text-center text-muted-foreground px-4">
                      <span className="truncate block max-w-[180px] mx-auto" title={user.email}>
                        {user.email}
                      </span>
                    </TableCell>

                    {/* Région */}
                    <TableCell className="text-center text-muted-foreground px-4 whitespace-nowrap">
                      {user.region}
                    </TableCell>

                    {/* Fonction */}
                    <TableCell className="text-center text-muted-foreground px-4 whitespace-nowrap">
                      {user.fonction}
                    </TableCell>

                    {/* Rôle */}
                    <TableCell className="text-center px-4">
                      <div className="flex justify-center">
                        <Badge 
                          variant="outline" 
                          className={cn("font-medium text-xs", roleColors[user.role])}
                        >
                          {roleLabels[user.role]}
                        </Badge>
                      </div>
                    </TableCell>

                    {/* Date création */}
                    <TableCell className="text-center text-muted-foreground px-4 whitespace-nowrap">
                      {formatDate(user.createdAt)}
                    </TableCell>

                    {/* Statut */}
                    <TableCell className="text-center px-4">
                      <div className="flex justify-center">
                        <Badge 
                          variant="outline" 
                          className={cn("font-medium text-xs", statusColors[user.status])}
                        >
                          {statusLabels[user.status]}
                        </Badge>
                      </div>
                    </TableCell>

                    {/* Actions - Détails */}
                    <TableCell className="text-center px-4">
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onViewDetails(user)}
                          className="h-8 px-3 text-xs font-medium border-border/50 hover:bg-muted"
                        >
                          <Eye className="h-3.5 w-3.5 mr-1.5" />
                          Afficher
                        </Button>
                        
                        {/* ← MODIFIÉ : Appelle handleToggleStatusClick au lieu de onToggleStatus direct */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleToggleStatusClick(user)}
                          className={cn(
                            "h-8 px-3 text-xs font-medium",
                            user.status === "ACTIVE" 
                              ? "text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300" 
                              : "text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
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
                        
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuItem onClick={() => onEdit(user)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {/* ← MODIFIÉ : Appelle handleDeleteClick au lieu de onDelete direct */}
                            <DropdownMenuItem 
                              onClick={() => handleDeleteClick(user)}
                              className="text-red-600 focus:text-red-600 focus:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* ← AJOUTER : Modal de confirmation */}
      <ConfirmationDialog
        open={confirmDialog.open}
        onOpenChange={(open) => setConfirmDialog(prev => ({ ...prev, open }))}
        type={confirmDialog.type}
        userName={confirmDialog.user ? `${confirmDialog.user.firstName} ${confirmDialog.user.lastName}` : ""}
        onConfirm={confirmDialog.type === "delete" ? handleConfirmDelete : handleConfirmToggle}
      />
    </>
  )
}