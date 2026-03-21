'use client'

import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { Navbar } from '@/components/layout/navbar'
import type { UserRole } from '@/types'

// Mock current user - In production, this would come from auth context
const currentUser = {
  name: 'Admin User',
  email: 'admin@quotation.ma',
  role: 'ADMIN' as UserRole,
  avatar: undefined,
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-svh w-full">
        <AppSidebar
          userRole={currentUser.role}
          userName={currentUser.name}
          userEmail={currentUser.email}
        />
        <div className="flex flex-1 flex-col min-w-0">
          <Navbar
            userName={currentUser.name}
            userEmail={currentUser.email}
            userRole={currentUser.role}
            userAvatar={currentUser.avatar}
          />
          <main className="flex-1 overflow-auto p-4 md:p-6 bg-muted/30">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
