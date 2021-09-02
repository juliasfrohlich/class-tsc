import { Router, Request, Response } from 'express';

import { AuthenticateUserUseCase } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase';
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const routes = Router()

const authenticateUserController = new AuthenticateUserController()

routes.post("/sessions", authenticateUserController.handle)

export { routes }