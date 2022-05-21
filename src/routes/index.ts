import { Router } from "express";

import { categoriesRotes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

export const router = Router();

router.use("/categories", categoriesRotes);
router.use("/specifications", specificationsRoutes);
