"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Plus, Filter, X, Users } from "lucide-react"
import { UserRole, UserStatus } from "@/types"

interface UsersFilterProps {
  onSearch: (query: string) => void
  onRoleFilter: (role: UserRole | "ALL") => void
  onStatusFilter: (status: UserStatus | "ALL") => void
  onAddUser: () => void
  totalUsers: number
}

export function UsersFilter({
  onSearch,
  onRoleFilter,
  onStatusFilter,
  onAddUser,
  totalUsers,
}: UsersFilterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeRole, setActiveRole] = useState<UserRole | "ALL">("ALL")
  const [activeStatus, setActiveStatus] = useState<UserStatus | "ALL">("ALL")

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  const handleRoleChange = (value: string) => {
    const role = value as UserRole | "ALL"
    setActiveRole(role)
    onRoleFilter(role)
  }

  const handleStatusChange = (value: string) => {
    const status = value as UserStatus | "ALL"
    setActiveStatus(status)
    onStatusFilter(status)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setActiveRole("ALL")
    setActiveStatus("ALL")
    onSearch("")
    onRoleFilter("ALL")
    onStatusFilter("ALL")
  }

  const hasActiveFilters = searchQuery || activeRole !== "ALL" || activeStatus !== "ALL"

  return (
    <div className="space-y-4">
      {/* Header Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5">
            <Users className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Liste des utilisateurs</p>
            <p className="text-xs text-muted-foreground">{totalUsers} résultat{totalUsers > 1 ? 's' : ''}</p>
          </div>
        </div>
        
        <Button 
          onClick={onAddUser}
          className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 h-10"
        >
          <Plus className="h-4 w-4 mr-2" />
          Ajouter
        </Button>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Role Filter - First on left */}
        <Select value={activeRole} onValueChange={handleRoleChange}>
          <SelectTrigger className="w-full lg:w-[150px] h-10 bg-background border-border/50 text-sm">
            <SelectValue placeholder="Rôle" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Tous les rôles</SelectItem>
            <SelectItem value="RESPONSABLE">Responsable</SelectItem>
            <SelectItem value="VALIDATEUR">Validateur</SelectItem>
            <SelectItem value="DEMANDEUR">Demandeur</SelectItem>
          </SelectContent>
        </Select>

        {/* Status Filter */}
        <Select value={activeStatus} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-full lg:w-[150px] h-10 bg-background border-border/50 text-sm">
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Tous les statuts</SelectItem>
            <SelectItem value="ACTIVE">Actif</SelectItem>
            <SelectItem value="INACTIVE">Inactif</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Input - Takes remaining space */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <Input
            placeholder="Rechercher par nom, email, téléphone..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="h-10 pl-10 bg-background border-border/50 focus:border-accent/50 focus:ring-accent/20 text-sm"
          />
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="h-10 px-3 text-muted-foreground hover:text-foreground border-border/50 whitespace-nowrap"
          >
            <X className="h-4 w-4 mr-1.5" />
            Effacer
          </Button>
        )}
      </div>
    </div>
  )
}
