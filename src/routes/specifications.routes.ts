import { Router, Request, Response, request, response } from 'express';
import { createSpecificationController } from "../modules/cars/useCases/createSpecification"
const routes = Router()


routes.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response)
})

export {routes}