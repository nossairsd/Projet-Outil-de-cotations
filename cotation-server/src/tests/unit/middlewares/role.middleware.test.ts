import { describe, it, expect, vi, beforeEach } from 'vitest';
import { roleMiddleware } from "../../../middlewares/role.middleware";
import { Request, Response, NextFunction } from 'express';

describe('roleMiddleware - Tests Unitaires', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };
    next = vi.fn();
  });

  it('devrait passer si rôle correspond', () => {
    // Arrange
    (req as any).user = { userId: 1, role: 'ADMIN' };
    
    // Act
    const middleware = roleMiddleware('ADMIN');
    middleware(req as Request, res as Response, next);

    // Assert
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it('devrait rejeter si rôle différent (403)', () => {
    // Arrange
    (req as any).user = { userId: 1, role: 'DEMANDEUR' };
    
    // Act
    const middleware = roleMiddleware('ADMIN');
    middleware(req as Request, res as Response, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Accès refusé' });
    expect(next).not.toHaveBeenCalled();
  });

  it('devrait rejeter si pas de user dans req (403)', () => {
    // Act - req.user est undefined
    const middleware = roleMiddleware('ADMIN');
    middleware(req as Request, res as Response, next);

    // Assert
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'Accès refusé' });
    expect(next).not.toHaveBeenCalled();
  });
});