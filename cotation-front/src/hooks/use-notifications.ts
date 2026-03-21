import { useState, useEffect } from 'react';
import { Notification } from '@/types';
import { mockNotifications } from '@/lib/mock-data';

interface UseNotificationsReturn {
  notifications: Notification[];
  unreadCount: number;
  isLoading: boolean;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export function useNotifications(userId?: string): UseNotificationsReturn {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un appel API
    const timer = setTimeout(() => {
      const filtered = userId
        ? mockNotifications.filter((n) => n.userId === userId)
        : mockNotifications;
      setNotifications(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [userId]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return {
    notifications,
    unreadCount,
    isLoading,
    markAsRead,
    markAllAsRead,
  };
}
