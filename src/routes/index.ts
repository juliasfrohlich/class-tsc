import { Router } from 'express';
import { routes as categoriesRoutes } from "./categories.routes";
import { routes as specificationsRoutes } from "./specifications.routes";
import { routes as usersRoutes } from "./users.routes";

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)
router.use("/users", usersRoutes)

export { router }