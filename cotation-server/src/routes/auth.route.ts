import {Router} from 'express';
import { AuthController } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

const router = Router();

// Login public
router.post('/login' , AuthController.login);

//création compte utilisateur (protégé, seulement ADMIN)
router.post('/users',
    authMiddleware,
    roleMiddleware("ADMIN"),
    AuthController.createUser
);

export default router;