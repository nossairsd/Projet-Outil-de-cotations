import {vi} from 'vitest';

// Variable d'envirenements pour les tests

process.env.JWT_SECRET = 'test-secret-key';
process.env.JWT_EXPIRES_IN = '1h';
process.env.BCRYPT_ROUNDS = '4'; // Chiffrement rapide pour les test

//Mock Prisma (base de données fictive pour tests unitaires)

vi.mock('@/utils/prisma' , () => ({
    prisma : {
        user :{
            create : vi.fn(),
            findUnique : vi.fn(),
            findMany : vi.fn(),
            update : vi.fn(),
            delete : vi.fn(),
            count: vi.fn(),
        },
        $disconnect : vi.fn(),
    }
}));

// Nettoyer les mocks après chaque test
afterEach(() => {
    vi.clearAllMocks();
});