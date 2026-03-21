import {describe , it , expect , vi , beforeEach} from 'vitest';
import request from 'supertest';
import express from 'express';
import authRoutes from '../../routes/auth.route';
import {prisma} from '../../utils/prisma';
import * as bcryptModule from 'bcrypt';  // ← Import nommé pour le mock

// Mock Prisma
vi.mock('../../utils/prisma', () => ({
  prisma: {
    user: {
      create: vi.fn(),
      findUnique: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      deleteMany: vi.fn(),
      count: vi.fn(),
    },
    $disconnect: vi.fn(),
  }
}));

// ✅ CORRECTION : Mock bcrypt avec factory function qui retourne les méthodes
vi.mock('bcrypt', async () => {
  return {
    default: {
      hash: vi.fn().mockResolvedValue('hashed-password'),
      compare: vi.fn().mockResolvedValue(true),  // ← Par défaut true
    },
    hash: vi.fn().mockResolvedValue('hashed-password'),
    compare: vi.fn().mockResolvedValue(true),  // ← Par défaut true
  };
});

// Créer l'application de test
const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

// Nettoyer avant chaque test
beforeEach(async () => {
  vi.clearAllMocks();
  await prisma.user.deleteMany();
});

describe('Routes Auth - Tests Intégration', () => {

  describe('POST /api/auth/login', () => {
    
    it('devrait connecter avec bons identifiants (200)', async () => {
      // Étape 1 : Mock l'utilisateur en base
      const userDB = {
        id: 1,
        nom: 'Test',
        prenom: 'User',
        email: 'test@kohlereurope.com',
        password: 'hashed-password',
        role: 'ADMIN',
        matricule: 'TEST001',
        fonction: 'Test Function',
        telephone: undefined,
        responsableEmail: undefined,
        createdAt: new Date()
      };

      // Simuler que l'utilisateur existe
      (prisma.user.findUnique as any).mockResolvedValue(userDB);
      
      // ✅ CORRECTION : Configurer explicitement bcrypt.compare pour retourner true
      const { default: bcrypt } = await import('bcrypt');
      vi.mocked(bcrypt.compare).mockResolvedValue(true as never);

      // Étape 2 : Envoyer la requête HTTP
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@kohlereurope.com',
          password: 'password123'
        });

      // Debug : voir ce qui se passe
      console.log('Response status:', response.status);
      console.log('Response body:', response.body);

      // Étape 3 : Vérifier la réponse
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('token');
      expect(response.body.user.email).toBe('test@kohlereurope.com');
      expect(response.body.user).not.toHaveProperty('password');
    });

    it('devrait rejeter avec mauvais mot de passe (400)', async () => {
      const userDB = {
        id: 1,
        nom: 'Test',
        prenom: 'User',
        email: 'test2@kohlereurope.com',
        password: 'hashed-password',
        role: 'ADMIN',
        matricule: 'TEST002',
        fonction: 'Test',
        telephone: undefined,
        responsableEmail: undefined,
        createdAt: new Date()
      };

      (prisma.user.findUnique as any).mockResolvedValue(userDB);
      
      // ✅ CORRECTION : Configurer explicitement pour retourner false
      const { default: bcrypt } = await import('bcrypt');
      vi.mocked(bcrypt.compare).mockResolvedValue(false as never);

      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test2@kohlereurope.com',
          password: 'mauvaisPassword'
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Mot de passe incorrect');
    });

    it('devrait rejeter si utilisateur inexistant (400)', async () => {
      (prisma.user.findUnique as any).mockResolvedValue(null);

      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'inexistant@kohlereurope.com',
          password: 'password123'
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Utilisateur non trouvé');
    });
  });
});