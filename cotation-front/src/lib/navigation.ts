import type { UserRole, NavItem } from '@/types'

// Sidebar navigation items - filtered by role
export const sidebarNavItems: NavItem[] = [
  {
    title: 'Accueil',
    href: '/dashboard',
    icon: 'Home',
    roles: ['ADMIN', 'DEMANDEUR', 'VALIDATEUR', 'RESPONSABLE'],
  },
  {
    title: 'Utilisateurs',
    href: '/dashboard/users',
    icon: 'Users',
    roles: ['ADMIN'],
  },
  {
    title: 'Quotations',
    href: '/dashboard/quotations',
    icon: 'FileText',
    roles: ['DEMANDEUR', 'VALIDATEUR', 'RESPONSABLE'],
  },
  {
    title: 'Validations',
    href: '/dashboard/validations',
    icon: 'CheckCircle',
    roles: ['VALIDATEUR', 'RESPONSABLE'],
  },
  {
    title: 'Rapports',
    href: '/dashboard/reports',
    icon: 'BarChart3',
    roles: ['ADMIN', 'RESPONSABLE'],
  },
  {
    title: 'Profil',
    href: '/dashboard/profile',
    icon: 'User',
    roles: ['ADMIN', 'DEMANDEUR', 'VALIDATEUR', 'RESPONSABLE'],
  },
  {
    title: 'Paramètres',
    href: '/dashboard/settings',
    icon: 'Settings',
    roles: ['ADMIN'],
  },
]

// Get navigation items for a specific role
export function getNavItemsForRole(role: UserRole): NavItem[] {
  return sidebarNavItems.filter((item) => item.roles.includes(role))
}

// Role labels in French
export const roleLabels: Record<UserRole, string> = {
  ADMIN: 'Administrateur',
  DEMANDEUR: 'Demandeur',
  VALIDATEUR: 'Validateur',
  RESPONSABLE: 'Responsable',
}

// Role colors for badges
export const roleColors: Record<UserRole, string> = {
  ADMIN: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  DEMANDEUR: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  VALIDATEUR: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  RESPONSABLE: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
}

// Status colors
export const statusColors = {
  active: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400',
}
