import { Router } from 'express';
import {routes as categoriesRoutes} from "./categories.routes"
import {routes as specificationsRoutes} from "./specifications.routes"

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)

export { router }