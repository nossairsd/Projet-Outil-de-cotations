'use client'

import * as React from 'react'
import { Bell, Check, Info, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'

import { cn } from '@/lib/utils'
import type { Notification } from '@/types'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'

// Mock notifications data
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Nouvelle quotation',
    message: 'Une nouvelle quotation a été soumise par Jean Dupont',
    type: 'info',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
  },
  {
    id: '2',
    title: 'Quotation approuvée',
    message: 'La quotation #QT-2024-001 a été approuvée',
    type: 'success',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
  {
    id: '3',
    title: 'Action requise',
    message: '3 quotations en attente de validation',
    type: 'warning',
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: '4',
    title: 'Quotation rejetée',
    message: 'La quotation #QT-2024-005 a été rejetée',
    type: 'error',
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
]

const notificationIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
}

const notificationColors = {
  info: 'text-blue-500 bg-blue-100',
  success: 'text-emerald-500 bg-emerald-100',
  warning: 'text-amber-500 bg-amber-100',
  error: 'text-red-500 bg-red-100',
}

export function NotificationsMenu() {
  const [notifications, setNotifications] = React.useState(mockNotifications)
  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative flex items-center justify-center size-9 rounded-lg border border-border/50 bg-background hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20">
          <Bell className="size-4 text-muted-foreground" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center size-5 rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-[10px] font-bold text-white shadow-lg shadow-red-500/30">
              {unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[320px] md:w-80 p-0" sideOffset={8}>
        <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Notifications</h4>
            <p className="text-xs text-muted-foreground">
              {unreadCount > 0 ? `${unreadCount} non lue${unreadCount > 1 ? 's' : ''}` : 'Tout est lu'}
            </p>
          </div>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="h-8 text-xs text-accent hover:text-accent"
            >
              <Check className="size-3 mr-1" />
              Tout lire
            </Button>
          )}
        </div>
        <ScrollArea className="h-[280px] md:h-[320px]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-8 text-center">
              <Bell className="size-10 text-muted-foreground/30 mb-2" />
              <p className="text-sm text-muted-foreground">Aucune notification</p>
            </div>
          ) : (
            <div className="divide-y">
              {notifications.map((notification) => {
                const Icon = notificationIcons[notification.type]
                return (
                  <button
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className={cn(
                      'w-full flex items-start gap-3 p-3 md:p-4 text-left hover:bg-muted/50 transition-colors',
                      !notification.read && 'bg-accent/5'
                    )}
                  >
                    <div
                      className={cn(
                        'shrink-0 size-8 rounded-full flex items-center justify-center',
                        notificationColors[notification.type]
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={cn(
                          'text-sm truncate',
                          !notification.read ? 'font-semibold text-foreground' : 'font-medium text-foreground/80'
                        )}>
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <span className="shrink-0 size-2 rounded-full bg-accent" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                        {notification.message}
                      </p>
                      <p className="text-[10px] text-muted-foreground/60 mt-1">
                        {formatDistanceToNow(notification.createdAt, {
                          addSuffix: true,
                          locale: fr,
                        })}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          )}
        </ScrollArea>
        <div className="p-2 border-t bg-muted/20">
          <Button
            variant="ghost"
            className="w-full h-9 text-sm text-accent hover:text-accent hover:bg-accent/5"
          >
            Voir toutes les notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
