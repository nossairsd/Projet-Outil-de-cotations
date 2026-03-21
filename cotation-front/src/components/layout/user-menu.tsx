'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User, Settings, LogOut } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'
import { roleLabels, roleColors } from '@/lib/navigation'
import type { UserRole } from '@/types'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface UserMenuProps {
  userName: string
  userEmail: string
  userRole: UserRole
  userAvatar?: string
}

export function UserMenu({ userName, userEmail, userRole, userAvatar }: UserMenuProps) {
  const router = useRouter()
  const { logout } = useAuth()  // ← UTILISER useAuth
  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // ← CORRIGÉ : Logout avec useAuth
  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-lg px-1.5 md:px-2 py-1.5 hover:bg-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20">
          <div className="relative flex-shrink-0">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={userName}
                className="size-8 rounded-full object-cover ring-2 ring-border"
              />
            ) : (
              <div className="size-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-cyan-500/20">
                {initials}
              </div>
            )}
            <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
          </div>
          <div className="hidden lg:flex flex-col items-start min-w-0">
            <span className="text-sm font-medium text-foreground leading-none truncate max-w-[120px]">
              {userName}
            </span>
            <span className={cn(
              'text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1',
              roleColors[userRole]
            )}>
              {roleLabels[userRole]}
            </span>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2" sideOffset={8}>
        <DropdownMenuLabel className="font-normal p-3 -mx-1 -mt-1 mb-1 bg-gradient-to-br from-muted/80 to-muted/40 rounded-lg border border-border/50">
          <div className="flex items-center gap-3">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={userName}
                className="size-11 rounded-full object-cover ring-2 ring-border"
              />
            ) : (
              <div className="size-11 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-cyan-500/20">
                {initials}
              </div>
            )}
            <div className="flex flex-col min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{userName}</p>
              <p className="text-xs text-muted-foreground truncate">{userEmail}</p>
              <span className={cn(
                'text-[10px] font-semibold px-1.5 py-0.5 rounded-full mt-1 w-fit',
                roleColors[userRole]
              )}>
                {roleLabels[userRole]}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer gap-3 py-2.5 rounded-lg">
            <Link href="/dashboard/profile">
              <User className="size-4 text-muted-foreground" />
              <span>Mon Profil</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer gap-3 py-2.5 rounded-lg">
            <Link href="/dashboard/settings">
              <Settings className="size-4 text-muted-foreground" />
              <span>Paramètres</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}  // ← UTILISE handleLogout CORRIGÉ
          className="cursor-pointer gap-3 py-2.5 rounded-lg text-red-600 focus:text-red-600 focus:bg-red-50"
        >
          <LogOut className="size-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}