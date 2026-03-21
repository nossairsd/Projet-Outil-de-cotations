'use client'

import { Search, Menu, PanelLeftClose, PanelLeft } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { UserRole } from '@/types'
import { useSidebar, SidebarTrigger } from '@/components/ui/sidebar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { UserMenu } from './user-menu'
import { NotificationsMenu } from './notifications-menu'

interface NavbarProps {
  userName: string
  userEmail: string
  userRole: UserRole
  userAvatar?: string
  className?: string
}

export function Navbar({
  userName,
  userEmail,
  userRole,
  userAvatar,
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-14 md:h-16 items-center gap-3 md:gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-3 md:px-6',
        className
      )}
    >
      {/* Sidebar Toggle Button - Always visible */}
      <SidebarTrigger className="flex-shrink-0 size-9 flex items-center justify-center rounded-lg border border-border/50 bg-background hover:bg-muted transition-colors">
        <PanelLeft className="size-4" />
        <span className="sr-only">Toggle sidebar</span>
      </SidebarTrigger>

      {/* Search Bar */}
      <div className="flex-1 flex items-center min-w-0">
        <div className="relative w-full max-w-xs md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <Input
            type="search"
            placeholder="Rechercher..."
            className="pl-9 h-9 w-full bg-muted/50 border-transparent focus:bg-background focus:border-input transition-colors text-sm"
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground md:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
        {/* Notifications */}
        <NotificationsMenu />

        {/* User Menu */}
        <UserMenu
          userName={userName}
          userEmail={userEmail}
          userRole={userRole}
          userAvatar={userAvatar}
        />
      </div>
    </header>
  )
}
