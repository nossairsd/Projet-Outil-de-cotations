import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AuthController } from "../../../controllers/auth.controller";
import { AuthService } from "../../../services/auth.service";
import { Request, Response } from 'express';
import { LoggedUser } from '../../../services/dtos/auth.dto';

// Mock AuthService
vi.mock('../../../services/auth.service', () => ({
  AuthService: {
    login: vi.fn(),
    createUser: vi.fn()
  }
}));

describe('AuthController - Tests Unitaires', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: any;
  let statusMock: any;

  beforeEach(() => {
    vi.clearAllMocks();
    
    jsonMock = vi.fn();
    statusMock = vi.fn().mockReturnValue({ json: jsonMock });
    
    req = { body: {} };
    res = {
      status: statusMock,
      json: jsonMock
    };
  });

  describe('login', () => {
    it('devrait retourner 200 avec token et user', async () => {
      req.body = { email: 'test@kohlereurope.com', password: 'password123' };
      
      const resultatService = {
        token: 'fake-token',
        user: {
          id: 1,
          nom: 'Test',
          prenom: 'User',
          email: 'test@kohler.com',
          role: 'ADMIN' as const,
          matricule: 'TEST001',
          fonction: 'Manager',
          createdAt: new Date(),
          telephone: undefined,        // ← CORRECTION : undefined au lieu de null
          responsableEmail: undefined  // ← CORRECTION : undefined au lieu de null
        } satisfies LoggedUser
      };
      
      vi.mocked(AuthService.login).mockResolvedValue(resultatService);

      await AuthController.login(req as Request, res as Response);

      expect(AuthService.login).toHaveBeenCalledWith('test@kohlereurope.com', 'password123');
      expect(jsonMock).toHaveBeenCalledWith(resultatService);
    });

    it('devrait retourner 400 si erreur service', async () => {
      req.body = { email: 'test@kohlereurope.com', password: 'wrong' };
      vi.mocked(AuthService.login).mockRejectedValue(new Error('Mot de passe incorrect'));

      await AuthController.login(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Mot de passe incorrect' });
    });
  });

  describe('createUser', () => {
    it('devrait retourner 201 avec user créé', async () => {
      req.body = { 
        nom: 'Dupont', 
        prenom: 'Jean',
        email: 'new@kohlereurope.com', 
        role: 'ADMIN',
        matricule: 'NEW001',
        fonction: 'Directeur'
      };
      
      const userCree = { 
        id: 1, 
        ...req.body,
        password: 'hashed-password',
        createdAt: new Date(),
        telephone: undefined,        // ← CORRECTION
        responsableEmail: undefined  // ← CORRECTION
      };
      
      vi.mocked(AuthService.createUser).mockResolvedValue(userCree as any);

      await AuthController.createUser(req as Request, res as Response);

      expect(AuthService.createUser).toHaveBeenCalledWith(req.body);
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(userCree);
    });

    it('devrait retourner 400 si erreur création', async () => {
      req.body = { email: 'invalid' };
      vi.mocked(AuthService.createUser).mockRejectedValue(new Error('Email invalide'));

      await AuthController.createUser(req as Request, res as Response);

      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith({ error: 'Email invalide' });
    });
  });
});