import { Router } from "express";

import { authenticationRoutes } from "./authenticate.routes";
import { categoriesRotes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

export const router = Router();

router.use("/categories", categoriesRotes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenticationRoutes);
