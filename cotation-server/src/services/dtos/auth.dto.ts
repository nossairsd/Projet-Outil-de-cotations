export interface CreateUserDTO {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: "ADMIN" | "DEMANDEUR" | "RESPONSABLE" | "VALIDATEUR";
  matricule: string;
  fonction: string;
  telephone?: string;
  responsableEmail?: string;
}

export interface LoggedUser {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: "ADMIN" | "DEMANDEUR" | "RESPONSABLE" | "VALIDATEUR";
  matricule: string;
  fonction: string;
  telephone?: string;
  responsableEmail?: string;
  createdAt: Date;
}