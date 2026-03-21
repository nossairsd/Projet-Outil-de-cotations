import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";
import { CreateUserDTO, LoggedUser } from "./dtos/auth.dto";

type RoleType = "ADMIN" | "DEMANDEUR" | "RESPONSABLE" | "VALIDATEUR";

export class AuthService {
  static async createUser(data: CreateUserDTO) {
    const hashedPassword = await bcrypt.hash(
      data.password,
      Number(process.env.BCRYPT_ROUNDS) || 12
    );

    return prisma.user.create({
      data: { ...data, password: hashedPassword },
    });
  }

  static async login(
    email: string,
    password: string
  ): Promise<{ token: string; user: LoggedUser }> {
    // Sélection explicite des champs pour TypeScript
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        nom: true,
        prenom: true,
        email: true,
        password: true, // important pour bcrypt
        role: true,
        matricule: true,
        fonction: true,
        telephone: true,
        responsableEmail: true,
        createdAt: true,
      },
    });

    if (!user) throw new Error("Utilisateur non trouvé");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Mot de passe incorrect");

    const token = generateToken(user.id, user.role as RoleType);

    const { password: _, ...userWithoutPassword } = user;

    return { token, user: userWithoutPassword as LoggedUser };
  }
}