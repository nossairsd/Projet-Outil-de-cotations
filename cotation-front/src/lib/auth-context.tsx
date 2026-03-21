'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, UserRole } from '@/types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('qm_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('qm_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const testUsers: Record<string, User> = {
        'admin@quotation.com': {
          id: '1',
          email: 'admin@quotation.com',
          name: 'Admin Manager',
          phone: '+212 612345678',
          role: 'ADMIN' as UserRole,
          status: 'active',
          region: 'Casablanca',
          fonction: 'Administrateur',
          createdAt: new Date('2024-01-15'),
          avatar: undefined,
        },
        'responsable@quotation.com': {
          id: '2',
          email: 'responsable@quotation.com',
          name: 'Responsable Ventes',
          phone: '+212 612345679',
          role: 'RESPONSABLE' as UserRole,
          status: 'active',
          region: 'Rabat',
          fonction: 'Responsable Commercial',
          createdAt: new Date('2024-02-10'),
          avatar: undefined,
        },
        'validateur@quotation.com': {
          id: '3',
          email: 'validateur@quotation.com',
          name: 'Validateur Finance',
          phone: '+212 612345680',
          role: 'VALIDATEUR' as UserRole,
          status: 'active',
          region: 'Fes',
          fonction: 'Validateur Financier',
          createdAt: new Date('2024-03-05'),
          avatar: undefined,
        },
        'demandeur@quotation.com': {
          id: '4',
          email: 'demandeur@quotation.com',
          name: 'Client Demandeur',
          phone: '+212 612345681',
          role: 'DEMANDEUR' as UserRole,
          status: 'active',
          region: 'Marrakech',
          fonction: 'Demandeur de Quotation',
          createdAt: new Date('2024-04-01'),
          avatar: undefined,
        },
      };

      const foundUser = testUsers[email];

      if (!foundUser) {
        throw new Error('Identifiants invalides');
      }

      if (password !== 'password123') {
        throw new Error('Mot de passe incorrect');
      }

      setUser(foundUser);
      localStorage.setItem('qm_user', JSON.stringify(foundUser));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // ← CORRIGÉ : Logout avec redirection
  const logout = () => {
    localStorage.removeItem('qm_user');
    localStorage.removeItem('token');
    setUser(null);
    // La redirection sera gérée par le composant qui appelle logout
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: user !== null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}