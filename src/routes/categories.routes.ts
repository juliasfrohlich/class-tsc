import { Router, Request, Response } from 'express';
import createCategoryController from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import multer from 'multer';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const routes = Router()

const upload = multer({
  dest: "./tmp"
})

routes.post("/", (request: Request, response: Response) => {
  return createCategoryController().handle(request, response)
})

routes.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response)
})

routes.post("/import", upload.single("file"), (request: Request, response: Response) => {
  return importCategoryController.handle(request, response)
})

export { routes }