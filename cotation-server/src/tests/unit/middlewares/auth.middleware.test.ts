import { describe, it, expect, vi, beforeEach } from 'vitest';
import { authMiddleware } from "../../../middlewares/auth.middleware";
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../../utils/jwt';

// Mock JWT
vi.mock('../../../utils/jwt', () => ({
  verifyToken: vi.fn()
}));

describe('authMiddleware - Tests Unitaires', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    vi.clearAllMocks();
    
    req = { headers: {} };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };
    next = vi.fn();
  });

  it('devrait passer avec token valide', () => {
    // Arrange
    req.headers = { authorization: 'Bearer valid-token-123' };
    const payload = { userId: 1, role: 'ADMIN' };
    
    vi.mocked(verifyToken).mockReturnValue(payload);

    // Act
    authMiddleware(req as Request, res as Response, next);

    // Assert
    expect(verifyToken).toHaveBeenCalledWith('valid-token-123');
    expect((req as any).user).toEqual(payload);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it('devrait rejeter si pas de header authorization (401)', () => {
    // Act
    authMiddleware(req as Request, res as Response, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Token manquant' });
    expect(next).not.toHaveBeenCalled();
  });

  it('devrait rejeter si token invalide (401)', () => {
    // Arrange
    req.headers = { authorization: 'Bearer invalid-token' };
    vi.mocked(verifyToken).mockImplementation(() => {
      throw new Error('Invalid token');
    });

    // Act
    authMiddleware(req as Request, res as Response, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Token invalide' });
    expect(next).not.toHaveBeenCalled();
  });
});