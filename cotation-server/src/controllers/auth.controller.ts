import { AuthService } from "../services/auth.service"
import {Request , Response} from "express";

export class AuthController{
    static async login(req : Request , res : Response){
        try {
            const {email , password} = req.body;
            const result = await AuthService.login(email , password);
            res.json(result);
        }catch(err : any) {
            res.status(400).json({error : err.message});
        }
    }

    static async createUser(req : Request , res : Response){
        try {
            const data = req.body;
            const user = await AuthService.createUser(data);
            res.status(201).json(user);
        } catch (err : any) {
            res.status(400).json({error : err.message});
        }
    }
}

/*
Les controllers ne font que recevoir la requête, appeler le service et renvoyer la réponse.

Cela permet de séparer logique métier et HTTP, pratique pour la maintenabilité.

*/