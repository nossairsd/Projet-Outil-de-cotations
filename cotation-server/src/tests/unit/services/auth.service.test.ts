import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthService } from "../../../services/auth.service"
import { prisma } from "../../../utils/prisma"
import bcrypt from 'bcrypt';

vi.mock('bcrypt', () => ({
  default: {
    hash: vi.fn().mockResolvedValue('hashed-password-xyz'),
    compare: vi.fn(),
  },
  hash: vi.fn().mockResolvedValue('hashed-password-xyz'),
  compare: vi.fn(),
}));

vi.mock('../../../utils/jwt', () => ({
  generateToken: vi.fn().mockReturnValue('fake-token-123'),
  verifyToken: vi.fn()
}));

vi.mock('../../../utils/prisma', () => ({
  prisma: {
    user: {
      create: vi.fn(),
      findUnique: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    }
  }
}));

describe('AuthService - Tests Unitaires', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('createUser', () => {
    it('devrait créer un utilisateur avec mot de passe hashé', async () => {
      const userData = {
        nom: 'Dupont',
        prenom: 'Jean',
        email: 'jean.dupont@kohlereurope.com',
        password: 'monSuperMotDePasse',
        role: 'ADMIN' as const,
        matricule: 'EMP001',
        fonction: 'Directeur'
      };

      const userCree = { 
        id: 1, 
        ...userData, 
        password: 'hashed-password-xyz' 
      };

      (prisma.user.create as any).mockResolvedValue(userCree);

      const resultat = await AuthService.createUser(userData);

      expect(resultat).toEqual(userCree);
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: { ...userData, password: 'hashed-password-xyz' }
      });
    });
  });

  describe('login', () => {
    it('devrait retourner un token quand identifiants corrects', async () => {
      const utilisateurDB = {
        id: 1,
        email: 'jean@kohlereurope.com',
        password: 'hashed-password-xyz',
        role: 'ADMIN',
        nom: 'Dupont',
        prenom: 'Jean',
        matricule: 'EMP001',
        fonction: 'Manager',
        telephone: null,
        responsableEmail: null,
        createdAt: new Date()
      };

      (prisma.user.findUnique as any).mockResolvedValue(utilisateurDB);
      vi.mocked(bcrypt.compare).mockResolvedValue(true as never);

      const resultat = await AuthService.login('jean@kohlereurope.com', 'bonMotDePasse');

      // ✅ Maintenant ça doit marcher !
      expect(resultat.token).toBe('fake-token-123');
      expect(resultat.user.email).toBe('jean@kohlereurope.com');
      expect(resultat.user).not.toHaveProperty('password');
    });

    it('devrait rejeter si email inconnu', async () => {
      (prisma.user.findUnique as any).mockResolvedValue(null);

      await expect(
        AuthService.login('inconnu@kohlereurope.com', 'pass')
      ).rejects.toThrow('Utilisateur non trouvé');
    });

    it('devrait rejeter si mot de passe incorrect', async () => {
      const utilisateurDB = {
        id: 1,
        email: 'jean@kohlereurope.com',
        password: 'hashed-password-xyz',
        role: 'ADMIN',
        nom: 'Dupont',
        prenom: 'Jean',
        matricule: 'EMP001',
        fonction: 'Manager',
        telephone: null,
        responsableEmail: null,
        createdAt: new Date()
      };

      (prisma.user.findUnique as any).mockResolvedValue(utilisateurDB);
      vi.mocked(bcrypt.compare).mockResolvedValue(false as never);

      await expect(
        AuthService.login('jean@kohlereurope.com', 'mauvaisPass')
      ).rejects.toThrow('Mot de passe incorrect');
    });
  });
});