import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController"

const routes = Router()

const createSpecificationController = new CreateSpecificationController()

routes.use(ensureAuthenticated)
routes.post("/", createSpecificationController.handle)

export {routes}