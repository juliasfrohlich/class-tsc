import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const routes = Router()

const upload = multer({
  dest: "./tmp"
})

const createCategoryController = new CreateCategoryController()

routes.post("/", createCategoryController.handle)

routes.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response)
})

routes.post("/import", upload.single("file"), (request: Request, response: Response) => {
  return importCategoryController.handle(request, response)
})

export { routes }