// User Roles
export type UserRole = 'ADMIN' | 'DEMANDEUR' | 'VALIDATEUR' | 'RESPONSABLE'

export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'PENDING'  // Majuscules

// User interface
export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  region: string
  fonction: string
  role: UserRole
  status: UserStatus
  createdAt: Date
  avatar?: string
  managerEmail?: string
  directorEmail?: string
}

// Notification interface
export interface Notification {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'success' | 'error'
  read: boolean
  createdAt: Date
}

// Navigation item interface
export interface NavItem {
  title: string
  href: string
  icon: string
  roles: UserRole[]
  badge?: number
}

// Navigation config by role
export interface NavConfig {
  mainNav: NavItem[]
  sidebarNav: NavItem[]
}
