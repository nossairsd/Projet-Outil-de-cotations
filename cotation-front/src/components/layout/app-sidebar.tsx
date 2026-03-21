'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import {
  Home,
  Users,
  FileText,
  CheckCircle,
  BarChart3,
  User,
  Settings,
  LogOut,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { getNavItemsForRole } from '@/lib/navigation'
import { useAuth } from '@/lib/auth-context'
import type { UserRole } from '@/types'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'

const iconMap: Record<string, LucideIcon> = {
  Home,
  Users,
  FileText,
  CheckCircle,
  BarChart3,
  User,
  Settings,
}

interface AppSidebarProps {
  userRole: UserRole
  userName?: string
  userEmail?: string
}

export function AppSidebar({ userRole, userName = 'Admin User', userEmail = 'admin@quotation.ma' }: AppSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { logout } = useAuth()  // ← UTILISER useAuth
  const navItems = getNavItemsForRole(userRole)
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'

  // ← CORRIGÉ : Logout avec useAuth
  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <Sidebar 
      collapsible="icon" 
      className="border-r-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"
    >
      <SidebarHeader className="p-3 md:p-4">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="relative size-9 md:size-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5 shadow-lg shadow-cyan-500/20 transition-all duration-300 group-hover:shadow-cyan-500/40 group-hover:scale-105 flex-shrink-0">
            <div className="size-full rounded-[10px] bg-slate-900 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Quotation Manager Logo"
                width={28}
                height={28}
                loading="eager"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-white tracking-tight truncate">
                Quotation Manager
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                Enterprise
              </span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <div className="h-px bg-slate-400/50 mx-4 flex-shrink-0" />

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = iconMap[item.icon]
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={cn(
                        'h-10 md:h-11 gap-3 transition-all duration-200 rounded-lg mx-1',
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-400 shadow-sm shadow-cyan-500/10' 
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      )}
                    >
                      <Link href={item.href}>
                        {Icon && (
                          <Icon
                            className={cn(
                              'size-[18px] transition-colors flex-shrink-0',
                              isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-white'
                            )}
                          />
                        )}
                        {!isCollapsed && (
                          <>
                            <span className={cn(
                              'font-medium text-sm truncate',
                              isActive ? 'text-white' : 'text-slate-300'
                            )}>
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-cyan-500 text-[10px] font-semibold text-white">
                                {item.badge}
                              </span>
                            )}
                            {isActive && (
                              <ChevronRight className="ml-auto size-4 text-cyan-400" />
                            )}
                          </>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="h-px bg-slate-400/50 mx-4 flex-shrink-0" />

      <SidebarFooter className="p-3 md:p-4 group-data-[collapsible=icon]:p-2">
        {!isCollapsed && (
          <div className="flex items-center gap-3 rounded-xl bg-slate-800/50 p-3 mb-3 border border-slate-700/50">
            <div className="size-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-cyan-500/20">
              {userName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {userName}
              </p>
              <p className="text-[11px] text-slate-400 truncate">
                {userEmail}
              </p>
            </div>
          </div>
        )}
        
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              tooltip="Déconnexion"
              className="h-10 md:h-11 gap-3 text-red-400 hover:bg-red-500/10 hover:text-red-400 transition-colors rounded-lg mx-1"
            >
              <LogOut className="size-[18px] flex-shrink-0" />
              {!isCollapsed && <span className="font-medium text-sm">Déconnexion</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}