import { useState, useEffect } from 'react';
import { User } from '@/types';
import { mockUsers } from '@/lib/mock-data';

interface UseUsersReturn {
  users: User[];
  isLoading: boolean;
  error: Error | null;
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  pendingUsers: number;
}

export function useUsers(): UseUsersReturn {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simuler un appel API avec délai
    const timer = setTimeout(() => {
      try {
        setUsers(mockUsers);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Une erreur est survenue'));
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === 'active').length;
  const inactiveUsers = users.filter((u) => u.status === 'inactive').length;
  const pendingUsers = users.filter((u) => u.status === 'pending').length;

  return {
    users,
    isLoading,
    error,
    totalUsers,
    activeUsers,
    inactiveUsers,
    pendingUsers,
  };
}
