import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';

const routes = Router()

const upload = multer({
  dest: "./tmp"
})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

routes.post("/", createCategoryController.handle)

routes.get("/", listCategoriesController.handle)

routes.post("/import", upload.single("file"), importCategoryController.handle)

export { routes }