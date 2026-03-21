"use client"

import { useState, useMemo } from "react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { UsersTable } from "@/components/dashboard/admin/users-table"
import { UsersFilter } from "@/components/dashboard/admin/users-filter"
import { AddUserModal, UserFormData } from "@/components/dashboard/admin/add-user-modal"
import { UserDetailsModal } from "@/components/dashboard/admin/user-details-modal"
import { User, UserRole, UserStatus } from "@/types"
import { Users, UserCheck, UserX } from "lucide-react"

// Mock data - replace with API calls
const mockUsers: User[] = [
  {
    id: "1",
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@entreprise.com",
    phone: "+33 6 12 34 56 78",
    region: "Île-de-France",
    fonction: "Directeur Commercial",
    role: "ADMIN",
    status: "ACTIVE",
    createdAt: new Date("2024-01-15"),
    managerEmail: "sophie.martin@entreprise.com",
    directorEmail: "pierre.durand@entreprise.com",
  },
  {
    id: "2",
    firstName: "Marie",
    lastName: "Martin",
    email: "marie.martin@entreprise.com",
    phone: "+33 6 23 45 67 89",
    region: "Rhône-Alpes",
    fonction: "Chef de Projet",
    role: "RESPONSABLE",
    status: "ACTIVE",
    createdAt: new Date("2024-02-20"),
    managerEmail: "jean.dupont@entreprise.com",
    directorEmail: "pierre.durand@entreprise.com",
  },
  {
    id: "3",
    firstName: "Pierre",
    lastName: "Bernard",
    email: "pierre.bernard@entreprise.com",
    phone: "+33 6 34 56 78 90",
    region: "PACA",
    fonction: "Responsable Achats",
    role: "VALIDATEUR",
    status: "INACTIVE",
    createdAt: new Date("2024-03-10"),
    managerEmail: "marie.martin@entreprise.com",
    directorEmail: "jean.dupont@entreprise.com",
  },
  {
    id: "4",
    firstName: "Sophie",
    lastName: "Petit",
    email: "sophie.petit@entreprise.com",
    phone: "+33 6 45 67 89 01",
    region: "Bretagne",
    fonction: "Commerciale",
    role: "DEMANDEUR",
    status: "ACTIVE",
    createdAt: new Date("2024-04-05"),
    managerEmail: "marie.martin@entreprise.com",
    directorEmail: "jean.dupont@entreprise.com",
  },
  {
    id: "5",
    firstName: "Lucas",
    lastName: "Moreau",
    email: "lucas.moreau@entreprise.com",
    phone: "+33 6 56 78 90 12",
    region: "Normandie",
    fonction: "Technicien",
    role: "DEMANDEUR",
    status: "ACTIVE",
    createdAt: new Date("2024-05-18"),
    managerEmail: "pierre.bernard@entreprise.com",
    directorEmail: "marie.martin@entreprise.com",
  },
  {
    id: "6",
    firstName: "Emma",
    lastName: "Leroy",
    email: "emma.leroy@entreprise.com",
    phone: "+33 6 67 89 01 23",
    region: "Grand Est",
    fonction: "Assistante Direction",
    role: "VALIDATEUR",
    status: "ACTIVE",
    createdAt: new Date("2024-06-22"),
    managerEmail: "jean.dupont@entreprise.com",
    directorEmail: "pierre.durand@entreprise.com",
  },
  {
    id: "7",
    firstName: "Thomas",
    lastName: "Roux",
    email: "thomas.roux@entreprise.com",
    phone: "+33 6 78 90 12 34",
    region: "Nouvelle-Aquitaine",
    fonction: "Ingénieur",
    role: "RESPONSABLE",
    status: "ACTIVE",
    createdAt: new Date("2024-07-30"),
    managerEmail: "marie.martin@entreprise.com",
    directorEmail: "jean.dupont@entreprise.com",
  },
  {
    id: "8",
    firstName: "Camille",
    lastName: "David",
    email: "camille.david@entreprise.com",
    phone: "+33 6 89 01 23 45",
    region: "Occitanie",
    fonction: "Comptable",
    role: "DEMANDEUR",
    status: "INACTIVE",
    createdAt: new Date("2024-08-14"),
    managerEmail: "emma.leroy@entreprise.com",
    directorEmail: "marie.martin@entreprise.com",
  },
]

export default function AdminDashboardPage() {
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<UserRole | "ALL">("ALL")
  const [statusFilter, setStatusFilter] = useState<UserStatus | "ALL">("ALL")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

  // Filter users based on search and filters
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        searchQuery === "" ||
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery)

      const matchesRole = roleFilter === "ALL" || user.role === roleFilter
      const matchesStatus = statusFilter === "ALL" || user.status === statusFilter

      return matchesSearch && matchesRole && matchesStatus
    })
  }, [users, searchQuery, roleFilter, statusFilter])

  // Calculate statistics
  const stats = useMemo(() => {
    return {
      total: users.length,
      active: users.filter((u) => u.status === "ACTIVE").length,
      inactive: users.filter((u) => u.status === "INACTIVE").length,
    }
  }, [users])

  const handleAddUser = (data: UserFormData) => {
    const newUser: User = {
      id: String(Date.now()),
      ...data,
      status: "ACTIVE",
      createdAt: new Date(),
    }
    setUsers((prev) => [newUser, ...prev])
  }

  const handleToggleStatus = (user: User) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === user.id
          ? { ...u, status: u.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" }
          : u
      )
    )
  }

  const handleViewDetails = (user: User) => {
    setSelectedUser(user)
    setIsDetailsModalOpen(true)
  }

  const handleEdit = (user: User) => {
    console.log("Edit user:", user)
  }

  const handleDelete = (user: User) => {
    setUsers((prev) => prev.filter((u) => u.id !== user.id))
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
          Gestion des Utilisateurs
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Gérez les comptes utilisateurs, leurs rôles et leurs accès à la plateforme.
        </p>
      </div>

      {/* Statistics Cards - Only 3 cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <StatsCard
          title="Total Utilisateurs"
          value={stats.total}
          description="Comptes enregistrés"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Utilisateurs Actifs"
          value={stats.active}
          description="Comptes actifs"
          icon={UserCheck}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Utilisateurs Inactifs"
          value={stats.inactive}
          description="Comptes désactivés"
          icon={UserX}
        />
      </div>

      {/* Filters and Search */}
      <div className="rounded-xl border border-border/50 bg-card p-3 md:p-4">
        <UsersFilter
          onSearch={setSearchQuery}
          onRoleFilter={setRoleFilter}
          onStatusFilter={setStatusFilter}
          onAddUser={() => setIsAddModalOpen(true)}
          totalUsers={filteredUsers.length}
        />

        <div className = "mt-4" >

      <UsersTable
        users={filteredUsers}
        onViewDetails={handleViewDetails}
        onToggleStatus={handleToggleStatus}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

        </div>


      {/* Modals */}
      <AddUserModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onSubmit={handleAddUser}
      />

      <UserDetailsModal
        user={selectedUser}
        open={isDetailsModalOpen}
        onOpenChange={setIsDetailsModalOpen}
        onEdit={handleEdit}
        onToggleStatus={handleToggleStatus}
      />
      </div>

      {/* Users Table */}

    </div>
  )
}
