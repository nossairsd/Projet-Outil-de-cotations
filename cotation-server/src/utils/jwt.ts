const jwt = require("jsonwebtoken");

// Variables d'environnement
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined in .env");
}

// Payload custom
interface TokenPayload {
  userId: number;
  role: string;
}

/**
 * Génère un JWT pour un utilisateur
 */
export const generateToken = (userId: number, role: string): string => {
  const payload: TokenPayload = { userId, role };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

/**
 * Vérifie et décode un token JWT
 */
export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
};